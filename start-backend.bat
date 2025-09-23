@echo off
echo Starting SIH Project Backend Server...
echo.

cd backend

echo Checking if Node.js is installed...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed.
echo.

echo Installing dependencies...
npm install

echo.
echo Starting the server...
echo The server will be available at:
echo - Local: http://localhost:5000
echo - Network: http://192.168.0.192:5000
echo.
echo Press Ctrl+C to stop the server
echo.

npm start

pause