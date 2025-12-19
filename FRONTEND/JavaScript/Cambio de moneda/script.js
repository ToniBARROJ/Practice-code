const currencies = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'MXN', name: 'Mexican Peso' },
  { code: 'ARS', name: 'Argentine Peso' },
  { code: 'BRL', name: 'Brazilian Real' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CLP', name: 'Chilean Peso' },
  { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'COP', name: 'Colombian Peso' },
  { code: 'CZK', name: 'Czech Koruna' },
  { code: 'DKK', name: 'Danish Krone' },
  { code: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'HUF', name: 'Hungarian Forint' },
  { code: 'INR', name: 'Indian Rupee' },
  { code: 'KRW', name: 'South Korean Won' },
  { code: 'NOK', name: 'Norwegian Krone' },
  { code: 'NZD', name: 'New Zealand Dollar' },
  { code: 'PEN', name: 'Peruvian Sol' },
  { code: 'PLN', name: 'Polish Zloty' },
  { code: 'RUB', name: 'Russian Ruble' },
  { code: 'SEK', name: 'Swedish Krona' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'TRY', name: 'Turkish Lira' },
  { code: 'UYU', name: 'Uruguayan Peso' },
  { code: 'ZAR', name: 'South African Rand' },
];

const errorMessages = {
  invalidQuantity: 'Please enter a valid quantity greater than zero.',
  sameCurrency: 'Current currency and wanted currency must be different.',
  apiError:
    'There was an error fetching the exchange rate. Please try again later.',
};

let quantityInput = document.getElementById('quantity');
let currentCurrency = document.getElementById('currentCurrency');
let wantedCurrency = document.getElementById('wantedCurrency');
const changeButton = document.getElementById('changeCurrency');
const resultText = document.getElementById('result');

function loadCurrencies(selectElement) {
  currencies.forEach((currency) => {
    const option = document.createElement('option');
    option.value = currency.code;
    option.text = `${currency.code} - ${currency.name}`;
    selectElement.appendChild(option);
  });
}

function inputValidation() {
  if (
    quantityInput.value <= 0 ||
    quantityInput.value === '' ||
    currentCurrency.value === wantedCurrency.value
  ) {
    return false;
  }
  return true;
}

function makeURL(amount, from, to) {
  let url = `https://api.exchangerate.host/convert?access_key=72e845380d2cfb60ccc3ea6e9302a292&from=${from}&to=${to}&amount=${amount}`;
  console.log(url);
  return url;
}

async function getData(amount, from, to) {
  try {
    const url = makeURL(amount, from, to);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.query, result.result);
    return result.result;
  } catch (error) {
    console.error(error.message);
    console.log('Error en la funcion getData');
    return null;
  }
}

changeButton.addEventListener('click', async () => {
  if (!inputValidation()) {
    resultText.innerHTML = 'Porfavor, revisa los datos introducidos';
    return;
  }

  const from = currentCurrency.value;
  const to = wantedCurrency.value;
  const amount = quantityInput.value;

  const result = await getData(amount, from, to);

  if (result === null) {
    resultText.innerHTML = 'Algo no ha ido bien';
  } else if (!result) {
    resultText.innerHTML = 'Error al obtener el cambio';
  } else {
    resultText.innerHTML = `${result} ${wantedCurrency.value}`;
  }
});

loadCurrencies(currentCurrency);
loadCurrencies(wantedCurrency);
