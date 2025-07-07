# Node.js + Express Backend

This is the backend API server for the User Registration app.

## Features
- Simple Express server
- In-memory user storage (no database required)
- CORS enabled for frontend integration

## Setup Instructions

1. **Install dependencies:**
   
   npm install

2. **Run the server:**
   
   node app.js

   The server will start on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### POST `/api/user`
- **Description:** Save a user in memory
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "dob": "1990-01-01"
  }
  ```
- **Response:**
  ```json
  { "message": "User saved successfully." }
  ```

### GET `/api/user`
- **Description:** Get the latest saved user
- **Response:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "dob": "1990-01-01"
  }
  ```

## Notes
- Data is stored in memory and will be lost when the server restarts.
- Make sure the backend is running before using the frontend.

## License
MIT 