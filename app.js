const express = require('express');
const app = express();

app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello Nodemon');
});

// GET - Students
app.get('/students', (req, res) => {
  res.json([
    { name: "Rahul" },
    { name: "Priya" }
  ]);
});

// POST - Student Add
app.post('/students', (req, res) => {
  res.send("Student Added");
});

// PUT - Student Update
app.put('/students/:id', (req, res) => {
  res.send("Student Updated");
});

// DELETE - Student Delete
app.delete('/students/:id', (req, res) => {
  res.send("Student Deleted");
});

// Query Params
app.get('/products', (req, res) => {
  res.send(req.query.category);
});

// Route Params
app.get('/student/:id', (req, res) => {
  res.send(req.params.id);
});

// Register API
app.post('/register', (req, res) => {
  res.json({
    message: "User Registered Successfully"
  });
});

app.listen(3000, () => {
  console.log('Server Running');
});