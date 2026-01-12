// Constantes para usar funciones de las dependencias
const express = require('express');
const path = require('path');

// Constante para llamar a la función exportada del archivo "api.js".
const { getConversion } = require('./api');

// Constante para crear una instancia de una aplicación Express.
const app = express();

// Constante para determinar un número de puerto.
const PORT = 3000;

const timer = 3600 * 1000;

// Petición express para poder servir los archivos del directorio "Frontend"
app.use(express.static(path.join(__dirname, '../Frontend')));

// Petición GET a la ruta "/" que sirve el archivo "index.html" del directorio "Frontend" como ruta principal cuando se inicia el servidor.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/index.html'));
});

// Petición GET a la ruta "/convert" que extrae los datos del frontend para después llamar a la función getConversion que hace el fetch a la API externa y devuelve un resultado.
app.get('/pair', async (req, res) => {
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
    console.log('Backend Error:', error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

setInterval(() => {
  console.log('Server is still running');
}, timer);
