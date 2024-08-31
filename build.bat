@ECHO OFF

SET __JS_CLIENT__=y
SET __WASM_CLIENT__=y
SET __JS_WORKERS__=y
SET __WASM_WORKERS__=y

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

ECHO.===========[ BUILD ]===========
ECHO.
ECHO.  CONFIG:
ECHO.     client:  js=%__JS_CLIENT__%, wasm=%__WASM_CLIENT__%
ECHO.     workers: js=%__JS_WORKERS__%, wasm=%__WASM_WORKERS__%
ECHO.
ECHO.Clean and refresh...
CALL flutter pub get
RMDIR /s /q .\build\web
RMDIR /s /q .\build\web-js2js
RMDIR /s /q .\build\web-wasm2js
RMDIR /s /q .\build\web-js2wasm
RMDIR /s /q .\build\web-wasm2wasm

IF "%__JS_WORKERS__%"=="y" (
    ECHO.
    ECHO.Generate and compile Web Workers to JavaScript...

    COPY .\lib\web_js.dart .\lib\web.g.dart
    RMDIR /s /q .\web\workers
    CALL dart run build_runner build
    CALL .\compile_web_worker_js.bat

    IF "%__JS_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to JavaScript...
        CALL flutter build web -O0 --source-maps --dump-info
        REN .\build\web web-js2js
        ECHO.
    )
    IF "%__WASM_CLIENT__%"=="y" (
        ECHO.Compile app to Web Assembly...
        CALL flutter build web -O0 --wasm --no-strip-wasm
        REN .\build\web web-wasm2js 
    )
)

IF "%__WASM_WORKERS__%"=="y" (
    ECHO.
    ECHO.Generate and compile Web Workers to WebAssembly...

    COPY .\lib\web_wasm.dart .\lib\web.g.dart
    RMDIR /s /q .\web\workers
    CALL dart run build_runner build
    CALL .\compile_web_worker_wasm.bat

    IF "%__JS_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to JavaScript...
        CALL flutter build web -O0 --source-maps --dump-info
        REN .\build\web web-js2wasm
    )

    IF "%__WASM_CLIENT__%"=="y" (
        ECHO.
        ECHO.Compile app to Web Assembly...
        CALL flutter build web -O0 --wasm --no-strip-wasm
        REN .\build\web web-wasm2wasm
    )
)

ECHO.
ECHO.Done.
