import currencyExchange from "./currencyExchange";

function getCurrency(response, dollarAmount, currency) {
  if (response.conversion_rate) {
    alert(`$${dollarAmount} in USD is ${dollarAmount * response.conversion_rate}. in ${currency}`);
  } else {
    alert(`There was an error: ${response.message}`);
  }
}

async function makeApiCall(currency, dollarAmount) {
  const response = await currencyExchange.getExchange(currency);
  getCurrency(response, dollarAmount, currency);
} 

// ui logic

window.addEventListener('load', function(){
  let input = this.document.getElementById('rate');
  input.addEventListener('submit',function(e){
    e.preventDefault();
    const currency = document.getElementById('money').value;
    const dollarValue = document.getElementById('dollarValue').value;
    makeApiCall(currency,dollarValue);
  });
});