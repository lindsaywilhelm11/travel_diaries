const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Dummy API route (you can add more later)
app.get('/api/memories', (req, res) => {
  res.json([
    { country: 'Japan', city: 'Tokyo', imageUrl: 'image_url_1', memory: 'Visited Shibuya!' },
    { country: 'Japan', city: 'Kyoto', imageUrl: 'image_url_2', memory: 'Loved the temples!' }
  ]);
});

app.listen(8000, () => {
  console.log('Hello! The server is running on port 8000');
});
