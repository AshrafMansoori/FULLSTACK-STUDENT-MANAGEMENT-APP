const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // 👈 1. Import Mongoose

const app = express();
app.use(cors());          
app.use(express.json());

// 👈 2. Connect to MongoDB (Creates a database named "studentManagement")
// Note: Using 127.0.0.1 is safer than 'localhost' for newer Node versions
mongoose.connect("mongodb://127.0.0.1:27017/studentManagement")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 👈 3. Define the Schema (The structure of your data)
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
  city: { type: String, required: true }
});

// Create the Model
const Student = mongoose.model("Student", studentSchema);

// --- ROUTES ---

app.get("/", (req, res) => {
  res.send("API is running");
});

// GET all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find(); // Fetches all from DB
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// POST add student
app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body); 
    await newStudent.save(); // Saves to DB
    res.json(newStudent);
  } catch (err) {
    res.status(500).json({ error: "Failed to add student" });
  }
});

// DELETE student
app.delete("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Student.findByIdAndDelete(id); // Finds by ID and removes from DB
    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete student" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});