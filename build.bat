@ECHO OFF

SET __JS_CLIENT__=y
SET __WASM_CLIENT__=y
SET __JS_WORKERS__=y
SET __WASM_WORKERS__=y
SET __WINDOWS__=n

IF "%1"=="win" (
    SET __WINDOWS__=y
    SHIFT
)

IF "%1"=="only" (
    REM invoked with "win only"
    IF "%__WINDOWS__%"=="y" (
        SET __JS_CLIENT__=n
        SET __WASM_CLIENT__=n
        SET __JS_WORKERS__=n
        SET __WASM_WORKERS__=n
        GOTO :build
    )
    REM otherwise ignore
    SHIFT
)

REM first arg for client
IF "%1"=="js" (
    SET __WASM_CLIENT__=n
) ELSE IF "%1"=="wasm" (
    SET __JS_CLIENT__=n
)

REM second arg for workers
IF "%2"=="js" (
    SET __WASM_WORKERS__=n
) ELSE IF "%2"=="wasm" (
    SET __JS_WORKERS__=n
)

:build
ECHO.===========[ BUILD ]===========
ECHO.
ECHO.  CONFIG:
ECHO.     windows: %__WINDOWS__%
ECHO.     client:  js=%__JS_CLIENT__%, wasm=%__WASM_CLIENT__%
ECHO.     workers: js=%__JS_WORKERS__%, wasm=%__WASM_WORKERS__%
ECHO.
ECHO.Clean and refresh...

CALL flutter pub get
CALL dart run build_runner build

IF "%__JS_WORKERS__%"=="y" (
    ECHO.
    ECHO.Generate and compile Web Workers to JavaScript...

    RMDIR /s /q .\build\web
    RMDIR /s /q .\web\workers
    CALL .\compile_web_workers_js.bat

    IF "%__JS_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to JavaScript...
        RMDIR /s /q .\build\web-js2js
        CALL flutter build web -O1 --source-maps --dump-info
        REN .\build\web web-js2js
        ECHO.
    )
    IF "%__WASM_CLIENT__%"=="y" (
        ECHO.Compile app to Web Assembly...
        RMDIR /s /q .\build\web-wasm2js
        CALL flutter build web -O1 --wasm --no-strip-wasm
        REN .\build\web web-wasm2js 
    )
)

IF "%__WASM_WORKERS__%"=="y" (
    ECHO.
    ECHO.Generate and compile Web Workers to WebAssembly...

    RMDIR /s /q .\build\web
    RMDIR /s /q .\web\workers
    CALL .\compile_web_workers_wasm.bat

    IF "%__JS_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to JavaScript...
        RMDIR /s /q .\build\web-js2wasm
        CALL flutter build web -O1 --source-maps --dump-info
        REN .\build\web web-js2wasm
    )

    IF "%__WASM_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to Web Assembly...
        RMDIR /s /q .\build\web-wasm2wasm
        CALL flutter build web -O1 --wasm --no-strip-wasm
        REN .\build\web web-wasm2wasm
    )
)

IF "%__WINDOWS__%"=="y" (
    ECHO.
    ECHO.Compile app to Windows...
    RMDIR /s /q .\build\windows
    CALL flutter build windows
)

ECHO.
ECHO.Done.
