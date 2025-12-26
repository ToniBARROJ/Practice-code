const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getConversion(from, to, amount) {
  const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`;

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
