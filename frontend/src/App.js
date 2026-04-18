
import { useEffect, useState } from "react";
import './App.css'
import {  StudentForm } from "./studentform";
import { ViewStudent } from "./viewStudent";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/students")
    .then(res => res.json())
    .then(data => setStudents(data));
}, []);


const addStudent = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const newStudent = await res.json();
    setStudents(prev => [...prev, newStudent]);
  } catch (err) {
    console.error("Error adding student:", err);
  }
};

const deleteStudent = async (id) => {
  await fetch(`http://localhost:5000/students/${id}`, {
    method: "DELETE"
  });

  setStudents(prev => prev.filter(s => s._id !== id));
};

  return (
    <div className="app">
      <div id="head">
        <h1><span>🎓</span> STUDENT MANAGEMENT SYSTEM</h1>
      </div>
      <StudentForm onSubmit={addStudent} />
      <div id="count"><h2>Total Students: {students.length}</h2></div>
      <ViewStudent students={students} onDelete={deleteStudent} />
    </div>

  );
}

export default App
