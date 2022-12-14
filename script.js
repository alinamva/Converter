let firstNum = document.querySelector('.first-num')
let secondNum = document.querySelector('.second-num')
let firstTd = document.querySelectorAll('.first-block button')
let secondTd = document.querySelectorAll('.second-block button')
const api ='https://api.exchangerate-api.com/v4/latest/USD'
let convertFromInfoText = document.querySelector(".from-text");
let convertToInfoText = document.querySelector(".to-text");
let li = document.querySelector('li')
let resultFrom;
let resultTo;


let convertFromCurrency = 'USD';
let convertToCurrency = 'TRY';
let convertFromUSD = document.querySelector("div.from > button.usd");
let convertFromTRY = document.querySelector("div.from > button.try");
let convertFromEUR = document.querySelector("div.from > button.eur");
let convertFromGBP = document.querySelector("div.from > button.gbp");
let convertToUSD = document.querySelector("div.to > button.usd");
let convertToTRY = document.querySelector("div.to > button.try");
let convertToEUR = document.querySelector("div.to > button.eur");
let convertToGBP = document.querySelector("div.to > button.gbp");

let allConvertFroms = [convertFromUSD, convertFromTRY, convertFromEUR, convertFromGBP];
let allConvertTos = [convertToUSD, convertToTRY, convertToEUR, convertToGBP];
    
let url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;
let ur = `https://api.exchangerate.host/latest?base=${convertToCurrency}&symbols=${convertFromCurrency}`;

convertFromUSD.style.backgroundColor = '#833AE0';
convertFromUSD.style.color = 'white';
convertToTRY.style.backgroundColor = '#833AE0';
convertToTRY.style.color = 'white';

function convert(firstNum, secondNum) {
    firstNum.addEventListener('input', () => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    secondNum.value = data.rates[convertToCurrency] * firstNum.value;
                });
    });
}
convert(firstNum,secondNum);

function converter(firstNum, secondNum) {
    secondNum.addEventListener('input', () => {
            fetch(ur)
                .then(response => response.json())
                .then(data => {
                    firstNum.value = data.rates[convertFromCurrency] * secondNum.value;
                }); 
    });
}
converter(firstNum, secondNum);

allConvertFroms.forEach((element) => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#833AE0';
        element.style.color = 'white';
        for(a in allConvertFroms) {
            if (allConvertFroms[a] !== element) {
                allConvertFroms[a].style.backgroundColor = 'white';
                allConvertFroms[a].style.color = 'rgb(163, 163, 163)';
            }
        }
        convertFromCurrency = element.innerText;
 url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
             secondNum.value =  data.rates[convertToCurrency] * firstNum.value;
      convertFromInfoText.innerText = `1 ${convertFromCurrency} = ${data.rates[convertToCurrency]} ${convertToCurrency}`;
            })
            fetch(`https://api.exchangerate.host/latest?base=${convertToCurrency}&symbols=${convertFromCurrency}`)
            .then(response => response.json())
            .then(data => {    
                convertToInfoText.innerText = `1 ${convertToCurrency} = ${data.rates[convertFromCurrency]} ${convertFromCurrency}`;
            })
    });
});

allConvertTos.forEach((element) => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = '#833AE0';
        element.style.color = 'white';

        for(a in allConvertTos) {
            if (allConvertTos[a] !== element) {
                allConvertTos[a].style.backgroundColor = 'white';
                allConvertTos[a].style.color = 'rgb(163, 163, 163)';
            }
        }
        convertToCurrency = element.innerText;     
        url = `https://api.exchangerate.host/latest?base=${convertFromCurrency}&symbols=${convertToCurrency}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                convertFromInfoText.innerText = `1 ${convertFromCurrency} = ${data.rates[convertToCurrency]} ${convertToCurrency}`;
            })
            fetch(`https://api.exchangerate.host/latest?base=${convertToCurrency}&symbols=${convertFromCurrency}`)
            .then(response => response.json())
            .then(data => {
      convertToInfoText.innerText = `1 ${convertToCurrency} = ${data.rates[convertFromCurrency]} ${convertFromCurrency}`;   
       firstNum.value = data.rates[convertFromCurrency] * secondNum.value;
            })
            converter(firstNum, secondNum);
    })
});
const mask1 = new IMask(firstNum, {
    mask: Number, 
    scale: 4,  
    signed: false,  
    thousandsSeparator:' ',  
    padFractionalZeros: false,  
    normalizeZeros: true,  
    radix: '.',  
    mapToRadix: ['.'],  
  })

  const mask2 = new IMask(secondNum, {
    mask: Number, 
    scale: 4,  
    signed: false,  
    thousandsSeparator:' ',  
    padFractionalZeros: false,  
    normalizeZeros: true,  
    radix: '.',  
    mapToRadix: ['.'],  
  })