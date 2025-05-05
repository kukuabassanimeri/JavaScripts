//* callbacks - function passed as an argument to another function
function firstFunction(parameter, callback){ //* callback is a function
    //* do stuffs 
    callback();

}
function greetUser(name, callback){
    console.log(`Hello ${name}`);
    callback(); //* call callback function

}
function sayBye(){
    console.log("Bye");
}
greetUser("John", sayBye); //* sayBye is passed as callback to greetUser

//* promises - Object that links Producing code and Consuming code
//* promise has 3 states - pending-still working on, fulfilled-finished successfully, rejected-something went wrong

//* syntax 
let myPromise = new Promise(function(myResolve, myReject){
    //* Producing code
    myResolve();
    myReject ();
});

//* consuming code
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

//* creating promise
const ourPromise = new Promise((myResolve, myReject) => {
    const error = false;
    if(!error){
        myResolve("Yes! resolved promise");
    }
    else{
        myReject("No! rejected promise");
    }
  });
  console.log(ourPromise);

  //* use promise
  ourPromise.then(value => {
    return value + 1;
  })

  //* thenable
  .then(newValue => {
    console.log(newValue);
  })
  .catch(err => {
    console.log(err);
  });

  //* Timeout promise
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timeout complete");
    }, 2000);
  });
  timeoutPromise.then(result => {
    console.log(result);
  });

  ourPromise.then(value => {
    console.log(value);
  });

  //* Fetch API