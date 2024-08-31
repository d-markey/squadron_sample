@SET OPTIM=-O0
@ECHO.Compile Web workers to JavaScript, optim = %OPTIM%...
@ECHO.
@ECHO.   pi_digits_worker.dart...
@CALL dart compile js .\lib\src\pi-digits\browser\pi_digits_worker.dart -o .\web\workers\pi_digits_worker.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   thumbnail_worker.dart...
@CALL dart compile js .\lib\src\thumbnails\browser\thumbnail_worker.dart -o .\web\workers\thumbnail_worker.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   text_size_worker.dart...
@CALL dart compile js .\lib\src\text-size\browser\text_size_worker.dart -o .\web\workers\text_size_worker.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   parser_worker.dart...
@CALL dart compile js .\lib\src\parser\browser\parser_worker.dart -o .\web\workers\parser_worker.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   parser2_worker.dart...
@CALL dart compile js .\lib\src\parser2\browser\parser2_worker.dart -o .\web\workers\parser2_worker.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   codegen.web.g.dart...
@CALL dart compile js .\lib\src\codegen\generated\codegen.web.g.dart -o .\web\workers\codegen.web.g.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   perf.web.g.dart...
@CALL dart compile js .\lib\src\perf\generated\perf.web.g.dart -o .\web\workers\perf.web.g.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.   json_service.web.g.dart...
@CALL dart compile js .\lib\src\json\generated\json_service.web.g.dart -o .\web\workers\json_service.web.g.dart.js %OPTIM% & ECHO ON
@ECHO.
@ECHO.Done