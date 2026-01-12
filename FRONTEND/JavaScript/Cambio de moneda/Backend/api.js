const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const API_KEY = '3b6219f6b9392c9563ff4f47';

async function getConversion(from, to, amount) {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Error en la API externa');
  }

  const data = await response.json();
  if (data.result !== 'success') {
    throw new Error('Respuesta inválida de la API');
  }

  return data.conversion_result;
}

module.exports = { getConversion };
