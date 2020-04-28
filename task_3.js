function extractCurrencyValue(str){
  return str.split('$').join('');
}
console.log(extractCurrencyValue('$120'));