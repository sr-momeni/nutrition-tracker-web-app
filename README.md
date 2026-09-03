# Nutrition Tracker Web App

A responsive React web application for logging meals, reviewing nutrition estimates, and monitoring calorie trends through an interactive dashboard.

The app supports an end-to-end meal logging workflow: users can authenticate, upload a meal image, send it to a compatible analysis API, review the returned nutrition information, save the meal, and view calorie history over time.

## Features

- User authentication flow and protected routes
- Meal image upload and processing workflow
- Integration with a REST API for meal analysis and nutrition estimates
- Nutrition result view with estimated ingredients and calories
- Meal history and recent meal cards
- Weekly calorie trend visualization
- User profile view
- Responsive desktop and mobile interface
- Progressive Web App (PWA) support

## Tech Stack

- React 18
- Vite
- React Router
- Tailwind CSS
- Material Tailwind
- Axios
- ApexCharts / React ApexCharts
- vite-plugin-pwa

## Application Flow

1. Sign in to the application.
2. Open the food log dashboard.
3. Upload or capture a meal image.
4. Send the image to the configured analysis API.
5. Review the returned nutrition estimate.
6. Save the meal to history.
7. Review meal history and weekly calorie trends from the dashboard.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm
- A compatible backend API for authentication, meal analysis, meal storage, and profile data

### Installation

```bash
git clone https://github.com/sr-momeni/Personal-food-log-app.git
cd Personal-food-log-app
npm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

If `VITE_API_BASE_URL` is not defined, the frontend defaults to `http://127.0.0.1:5000`.

The frontend currently expects the following API routes under `/api`:

- `POST /login`
- `POST /upload`
- `POST /predict`
- `GET /meals`
- `POST /save_meal`
- `GET /profile`

### Run Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/     # Reusable application components
├── context/        # Shared meal/application state
├── layouts/        # Dashboard layout components
├── pages/          # Authentication, dashboard, profile, processing and result views
├── utils/          # Authentication and utility helpers
├── widgets/        # Reusable dashboard cards and UI widgets
├── api.js          # REST API client and endpoint helpers
├── App.jsx         # Main routing and protected-route logic
└── main.jsx        # Application entry point
```

## API / Backend Note

This repository contains the React frontend. Meal prediction and persistent backend functionality require a compatible API service configured through `VITE_API_BASE_URL`. The frontend does not contain or claim to implement the underlying nutrition inference model itself.

## Portfolio Focus

This project demonstrates practical experience with:

- React application architecture
- API integration
- Authentication and route protection
- State management
- Dashboard development and data visualization
- Responsive UI development
- PWA configuration

## Status

This is a prototype. The current client-side authentication/session approach is suitable for demonstration purposes and would require additional backend security hardening for production use.
