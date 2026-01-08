const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getConversion(from, to, amount) {
  const url = `https://api.massive.com/v1/conversion/${from}/${to}?amount=${amount}&precision=2&apiKey=6P6Twlq87yQAfpL4SDC80kcK3s7VNP0z`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error al obtener datos de la API');
  }
  const data = await response.json();

  if (!data.result) {
    throw new Error('Respuesta inválida de la API');
  }
  return data.result;
}

module.exports = { getConversion };
