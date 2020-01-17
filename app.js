//Listen to submit event
document.querySelector('#loan-form').addEventListener('submit', calcResult);

function calcResult(e){

  e.preventDefault();
//UI varibles
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const pricipal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest) / 100 / 12;
const calculatedPayment = parseFloat(years.value) * 12;

// Compute the monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayment);
const monthly = (pricipal*x*calculatedInterest)/(x-1);

// Checking if monthly is finite

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayment).toFixed(2);
  totalInterest.value = ((montly * calculatedPayment)-pricipal).toFixed(2);
  console.log()
} else {
  console.log('Pls check ur numbers')
}


  
}