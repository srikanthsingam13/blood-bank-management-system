# Blood Bank Management System - MERN

College-level MERN Blood Bank Management System.

## Features
- Registration, login and logout using localStorage (no JWT/auth middleware, per project requirement)
- Donor CRUD and search
- Blood stock CRUD, expiry and low-stock status
- Blood requests: pending, approve, reject, issue
- Donations automatically create blood-stock batches
- Dashboard statistics
- Responsive UI

## Requirements
- Node.js
- MongoDB running locally

## Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```
For macOS/Linux use `cp .env.example .env`.

Backend runs on `http://localhost:5000`.

## Frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```
Open the Vite URL shown in the terminal.

## Important
This project intentionally does not use JWT/authentication middleware because the requested college/demo design specified no authentication/authorization. Passwords are stored as plain text, so this setup is not suitable for production.
