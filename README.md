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
