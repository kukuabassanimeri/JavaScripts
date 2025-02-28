//* The try, catch and finally blocks - used to handle exceptions
//* Error object has at least two properties: name specifies the error name. message explains the error in detail.
try {
    let result = add(10, 20);
    console.log(result);
  } catch (e) {
    console.log({ name: e.name, message: e.message });
  }
  console.log('Bye');

  //* Ignoring the catch block
const add = (x, y) => x + y;
try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
}
console.log('Bye');

//* Using finally
const multiply = (x, y) => x * y;
let result = 0;
try {
  result = multiply(10, 20);
} catch (e) {
  console.log(e.message);
} finally {
  console.log({ result });
}

//* Throw exception - allows you to throw an exception
function sum(x, y) {
    if (typeof x !== 'number') {
      throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
      throw 'The second argument must be a number';
    }
    return x + y;
  }
  try {
    const result = sum('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  //* Using JavaScript throw statement to throw an instance of the Error class
  function summation(x, y) {
    if (typeof x !== 'number') {
      throw new Error('The first argument must be a number');
    }
    if (typeof y !== 'number') {
      throw new Error('The second argument must be a number');
    }
    return x + y;
  }
  try {
    const r1 = summation('a', 10);
    console.log(r1);
  } catch (e) {
    console.log(e.name, ':', e.message);
  }
  
  
  