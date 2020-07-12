
function show_pretty_price(value) {

  // Rounding to two decimals.
  let price = Number(value).toFixed(2);
  let arr = price.toString().split('');

  let tempDeci = [];

  // Decimals always at the last two indices.
  for (i = arr.length - 2; i < arr.length; i++)
    tempDeci[i] = arr[i];

  // Parsing of decimal part of received value.
  let decimal = parseInt(tempDeci.join(''));

  value -= decimal / 100;

  // If-else chain determining the rounding.
  if (decimal > 0 && 50 >= decimal) {
   
    // Round to .50
    value++;
    return Number(value).toFixed(0).valueOf() - 0.50;

  } else if (decimal > 50 && 95 >= decimal) {
    
    // Round to .95
    value++;
    return Number(value).toFixed(0).valueOf() - 0.05;  

  } else if (decimal > 95) {
    
    // Round to .00
    value++;
    let temp = Number(value).toFixed(0);
    return Number(temp).toFixed(2).valueOf() - 0.00; 
  }

  // The value ends with .00
  return value;
}

// Counts occurences of value in array.
function count(arr) {
  
  let b = [], prev = -Infinity;
  arr.sort();

  for (let i = 0; i < arr.length; i++ ) {
      
    if (arr[i] !== prev) {
      b.push(1);
    } else {
      b[b.length-1]++;
    }
    prev = arr[i];
  }
  return b;
}

// There are 100 different 2 decimal values.
exports.distri_test = function (value) {
  let arr = [];

  for (let i = 0; i < 100; i++) {
    
    arr.push(show_pretty_price(value));    
    value+= 0.01;
  }
 
  let occurences = count(arr);
  return occurences;
}