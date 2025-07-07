# Next.js + Tailwind Frontend

This is the frontend for the User Registration app, built with Next.js and Tailwind CSS.

## Features
- Modern, responsive UI with Tailwind CSS
- User registration form
- Fetches and displays user data and a random dog image
- Clean navigation and error handling

## Setup Instructions

1. **Install dependencies:**
   
   npm install
   

2. **Run the development server:**
   
   npm run dev
   
   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Ensure the backend is running** (see backend/README.md for details).

## Troubleshooting Tailwind CSS
- If styles look plain or unstyled, ensure you are using Tailwind v3 (not v4 beta).
- Your `postcss.config.js` should be:
  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```
- Your `globals.css` should contain only:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Restart the dev server after any config changes.

## File Structure
- `app/` — Next.js app directory
- `app/form/page.tsx` — User form page
- `app/display/page.tsx` — Display page
- `app/layout.tsx` — Global layout and CSS import
- `app/globals.css` — Tailwind CSS directives

## Customization
- Edit `app/form/page.tsx` and `app/display/page.tsx` for UI changes.
- Update `tailwind.config.js` for custom colors or themes.



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
