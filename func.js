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
  if (decimal > 00 && 50 >= decimal) {
   
    // Round to .50
    int++;
    return Number(int).toFixed(0).valueOf() - 0.50;

    /* Test:
    return 1;*/

  } else if (decimal > 50 && 95 >= decimal) {
    
    // Round to .95
    int++;
    return Number(int).toFixed(0).valueOf() - 0.05;

    /* Test:
    return 2;*/   

  } else if (decimal > 95) {
    
    // Round to .00
    int++;
    let temp = Number(int).toFixed(0);
    return Number(temp).toFixed(2).valueOf() - 0.00; 

    /* Test:
    return 3;*/

  }

  // The value ends with .00
  return value;

  /* Test:
  return 0;*/
}

function distribution_test(value) {

  /* Test:    
  let arr = [0,0,0,0];*/

  for (let i = 0; i < 100; i++) {
    console.log(show_pretty_price(value));
    
    /* Test:
    let index = show_pretty_price(value);
    arr[index]++;*/

    value+= 0.01;
  }
  /* Test:
  return arr;*/
}

console.log(distribution_test(99));