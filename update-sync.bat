@echo off
set /p msg=Enter update message: 
echo.
echo === Expo update ===
call eas update --branch preview --message "%msg%"
echo.
echo === Git commit and push ===
call git add .
call git commit -m "%msg%"
call git push origin main
echo.
echo ✅ Update completed with message: %msg%
pause
