# FarmLoop — Farmer's Marketplace

A Web Computing Lab microproject built with React + Vite + Bootstrap.

## Project idea

FarmLoop is a two-sided agricultural marketplace:

Farmer → FarmLoop → Local Vendor/Retailer

Farmers can list produce with quantity, desired selling price and location. Local vendors can search listings, compare products and send direct purchase requests.

## Syllabus coverage

- JavaScript ES6+
- Objects and arrays
- Destructuring
- Functional components
- Props and reusable components
- DOM/event handling through React
- useState
- useEffect
- React Router
- Fetch/JSON concept
- Bootstrap responsive UI
- Git/GitHub ready structure
- Vite

## Current prototype data model

This microproject intentionally uses JSON seed data and browser localStorage rather than a backend database, keeping the implementation within the supplied Web Computing Lab syllabus.

## Run

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Main pages

- `/` Home
- `/marketplace` Vendor Marketplace
- `/product/:id` Product Details + Purchase Request
- `/farmer` Farmer Dashboard
- `/farmer/add` Add Produce
- `/orders` Purchase Requests
- `/about` About FarmLoop

## Notes

The login/authentication, permanent backend database, online payment and real multi-user communication can be added as future scope.
