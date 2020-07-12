
function show_pretty_price(value) {

  // Preliminary rounding to two decimals.
  let price = Number(value).toFixed(2);
  let arr = price.toString().split('');

  let tempDeci = [];
  let tempInt = [];
  
  // Decimals always at the last two indices.
  for (i = arr.length - 2; i < arr.length; i++)
  tempDeci[i] = arr[i];

  // Copying of the int.
  for (i = 0; i < arr.length - 3; i++)
    tempInt[i] = arr[i];

  // Parsing of int and decimal part of received value.
  let int = parseInt(tempInt.join(''));
  let decimal = parseInt(tempDeci.join(''));

  // If-else chain determining the rounding.
  if (decimal > 0 && 50 >= decimal) {
   
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

// Counts occurences of value in array.
function count(arr) {
  
  let b = [], prev = 0;
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