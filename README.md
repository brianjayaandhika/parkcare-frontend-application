# IMPORTANT

🧩 Running the Project Locally

This project consists of two parts:

Frontend: React + TypeScript + Vite
Backend: Java Spring Boot

Since the frontend and backend run on different ports, you may encounter CORS errors when calling APIs.
To avoid that, you can:

Run Chrome in no-security mode:

chrome.exe --disable-web-security --user-data-dir="C:\temp\chrome-nosec"

(for development only — do not use on your main profile)

## API Setup

To use the project as expected, the server (parkcare-backend) needs to also be started first. Default endpoint should
be able to be reached http://localhost:8080 unless configured otherwise.

## Running the project

After cloning the source code from the repository, do not forget to install the packages first. If you are using npm,

npm install 

After that, run the development server with,

npm run dev

The page will be accessible in http://localhost:5173 unless configured otherwise.

## Available Pages

In this project, there are only 2 available pages

- /check-in     -> To view active tickets and check in
- /check-out    -> To view history tickets and check out