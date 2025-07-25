const apiKey = '72e845380d2cfb60ccc3ea6e9302a292';
const url = `https://api.exchangerate.host/live?access_key=${apiKey}`


fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.quotes)
        console.log(data.quotes.USDAED)
    })
    .catch(error => console.error(error));

