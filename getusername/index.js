const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Middleware to parse JSON body
app.use(express.json());
app.use(express.static('public'));  // For serving static files (if needed)

// Serve index.html when GET / is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// POST endpoint to handle form data
app.post('/api/submit', (req, res) => {
  const { username, email } = req.body;
  console.log('Received:', username, email);

  // Respond back with a JSON message
  res.json({ message: 'Data received!', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
