FlightQ ✈️

FlightQ is a full-stack flight search application built to explore real-world flight data. The current version is a pre v1 build with goals to implement a database to store routes of interest by the user and have cron-jobs to notify the user of price changes/drops.

### What it does

- Search for flights by origin, destination, departure date, and cabin class
- Fetches live (sandbox) flight offers from the [Duffel API](https://duffel.com) (Eventually will switch to non-sandbox request)
- Displays results as flight cards showing route, departure/arrival time, duration, and price
- Client-side validation prevents selecting a departure date in the past


## Frontend
- React (Vite)
- Tailwind CSS v4

## Backend
- Node.js / Express
- [Duffel API](https://duffel.com) (sandbox mode) for live flight data

## Tooling
- GitHub Actions CI (build across Node 18.x / 20.x / 22.x for the backend, single-version build for the frontend)
Project Structure

This is a repo with two subprojects:

```
flightQ/
├── frontend/     # React + Vite + Tailwind app
│   ├── src/
│   │   ├── components/   # Navbar, Searchform, Card, CardList
│   │   └── utils/        # parseDuration, getTodaysDate, getFlightTime, etc.
│   └── package.json
├── backend/      # Express API server
│   ├── routes/
│   │   └── search.js     # POST /api/flights/search
│   ├── server.js
│   └── package.json
└── .github/workflows/    # CI pipeline
```

## Getting Started

### Prerequisites
- Node.js (v18, 20, or 22)
- A [Duffel API](https://duffel.com) sandbox token

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
DUFFEL_API_KEY=duffel_test_your_key_here
```

Start the server:

```bash
node server.js
```

The API will run on `http://localhost:4000`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000`.


### `POST /api/flights/search`

Searches for flight offers.

**Request body:**
```json
{
  "origin": "JFK",
  "destination": "LAX",
  "departure_date": "2026-09-15",
  "cabin_class": "economy"
}
```

Response: an array of flight offer objects from Duffel, including price, slices (route/timing), and airline details.

### Roadmap

- [x] `tracked_searches` table (PostgreSQL) to save searches and track price history :)
- [ ] Cron job to poll saved searches for price drops
- [ ] Email notifications on new lowest price
- [ ] Airport/city autocomplete on the search form


