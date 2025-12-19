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

function makeURL() {
  const validation = inputValidation();

  if (validation) {
    let currencyQuantity = encodeURIComponent(
      document.getElementById('quantity').value
    );
    let wantedCurrencyURI = encodeURIComponent(
      document.getElementById('wantedCurrency').value
    );
    let currentCurrencyURI = encodeURIComponent(
      document.getElementById('currentCurrency').value
    );

    let url = `https://api.exchangerate.host/convert?access_key=72e845380d2cfb60ccc3ea6e9302a292&from=${currentCurrencyURI}&to=${wantedCurrencyURI}&amount=${currencyQuantity}`;
    console.log(url);
    return url;
  } else {
    return null;
  }
}

async function getData() {
  try {
    const url = makeURL();

    if (url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();

      console.log(result.query, result.result);
      return result.result;
    } else {
      console.log('Se deben cumplir los campos');
      return false;
    }
  } catch (error) {
    console.error(error.message);
    console.log('Error en la funcion getData');
    return null;
  }
}

changeButton.addEventListener('click', async () => {
  const result = await getData();

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
