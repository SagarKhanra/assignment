const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

// In-memory storage for the latest user
let latestUser = null;

// POST /api/user - Save user in memory
app.post("/api/user", (req, res) => {
  const { firstName, lastName, dob } = req.body;
  if (!firstName || !lastName || !dob) {
    return res.status(400).json({ error: "All fields are required." });
  }
  latestUser = { firstName, lastName, dob };
  res.status(201).json({ message: "User saved successfully." });
});

// GET /api/user - Return the latest saved user
app.get("/api/user", (req, res) => {
  if (!latestUser) {
    return res.status(404).json({ error: "No user found." });
  }
  res.json(latestUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
