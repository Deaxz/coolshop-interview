
function show_pretty_price(value) {

  // Preliminary rounding to two decimals.
  let price = Number(value).toFixed(2);
  let arr = price.toString().split('');

  let tempDeci = [];
  let tempInt = [];
  
  // Copying of the decimals.
  for (i = arr.length - 2; i < arr.length; i++)
  tempDeci[i] = arr[i];

  // Copying of the int.
  for (i = 0; i < arr.length - 3; i++)
    tempInt[i] = arr[i];

  // Parsing of int and decimal part of received value.
  let int = parseInt(tempInt.join(''));
  let decimal = parseInt(tempDeci.join(''));

  // If-else chain determining the rounding.
  if (decimal > 00 && 50 >= decimal) {
   
    // Round to .50
    int++;
    return Number(int).toFixed(0).valueOf() - 0.50;

  } else if (decimal > 50 && 95 >= decimal) {
    
    // Round to .95
    int++;
    return Number(int).toFixed(0).valueOf() - 0.05;

  } else if (decimal > 95) {
    
    // Round to .00
    int++;
    let temp = Number(int).toFixed(0);
    return Number(temp).toFixed(2).valueOf() - 0.00; 

  }

  // The value ends with .00
  return value; 
}