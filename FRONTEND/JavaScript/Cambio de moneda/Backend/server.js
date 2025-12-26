const express = require('express');
const path = require('path');
const { getConversion } = require('./api');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

// Currency conversion endpoint
app.get('/convert', async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({
      success: false,
      result: 'Parámetros inválidos',
    });
  }
  try {
    const result = await getConversion(from, to, amount);

    res.json({
      success: true,
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      result: 'Error al obtener la conversión',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

setInterval(() => {
  console.log('Server is still running');
}, 300000);
