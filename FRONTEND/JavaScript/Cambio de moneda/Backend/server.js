const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Main endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// Currency conversion endpoint
app.get('/convert', (req, res) => {
  const { from, to, amount } = req.query;
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Missing parameters' });
  }
  res.json({ from, to, amount, result: amount * 0.9 });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running on 127.0.0.1:${PORT}`);
});

setInterval(() => {
  console.log('Server is still running');
}, 300000);
