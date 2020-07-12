
const test = require("tape");
const func = require('./func.js');

let result = [];

test("Testing distribution of outputs", function(assert) {

  assert.plan(10);

  result = func.distri_test(0);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 0. The output array and the expected array are equal.");
  
  let result1 = func.distri_test(1);
  console.log("Test 1: " + result1);
  assert.deepEqual(result1, [1, 50, 45, 4], "Test: 1. The output array and the expected array are equal.");

  result = func.distri_test(10);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 10. The output array and the expected array are equal.");

  result = func.distri_test(15);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 15. The output array and the expected array are equal.");

  result = func.distri_test(50);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 50. The output array and the expected array are equal.");

  result = func.distri_test(100);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 100. The output array and the expected array are equal.");

  result = func.distri_test(10000);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 10000. The output array and the expected array are equal.");

  result = func.distri_test(1000000);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 1000000. The output array and the expected array are equal.");

  result = func.distri_test(10000000);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: 1000000. The output array and the expected array are equal.");

  result = func.distri_test(99952347);
  assert.deepEqual(result, [1, 50, 45, 4], "Test: ###. The output array and the expected array are equal."); 
});