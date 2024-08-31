@ECHO OFF

SET __SCRIPT_DIR__=%~dp0

SET __REBUILD__=0
SET __CLIENT__=
SET __WORKERS__=

:parse
IF "%~1"=="" GOTO endparse
REM rebuild flag
IF "%~1"=="/rebuild" (
    SET __REBUILD__=1
    GOTO nextarg
) ELSE IF "%~1"=="--rebuild" (
    SET __REBUILD__=1
    GOTO nextarg
) ELSE IF "%~1"=="-b" (
    SET __REBUILD__=1
    GOTO nextarg
) ELSE IF "%~1"=="/b" (
    SET __REBUILD__=1
    GOTO nextarg
)
REM 1st arg is for client (will default to "js")
IF "%__CLIENT__%"=="" (
    SET __CLIENT__=%~1
    GOTO nextarg
)
REM 2nd arg is for workers (will default to "js")
IF "%__WORKERS__%"=="" (
    SET __WORKERS__=%~1
    GOTO nextarg
)

:nextarg
SHIFT
GOTO parse
:endparse

IF "%__REBUILD__%"=="1" (
    CALL "%__SCRIPT_DIR__%.\build.bat" %__CLIENT__% %__WORKERS__%
)

SET __FLAVOUR__=%__CLIENT__%2%__WORKERS__%

PUSHD "%__SCRIPT_DIR__%.\build\web-%__FLAVOUR__%"

IF NOT ERRORLEVEL 1 (
    ECHO.Run app from %__SCRIPT_DIR__%.\build\web-%__FLAVOUR__%
    CALL dart pub global run dhttpd "--headers=Cross-Origin-Embedder-Policy=credentialless;Cross-Origin-Opener-Policy=same-origin"
)

POPD
