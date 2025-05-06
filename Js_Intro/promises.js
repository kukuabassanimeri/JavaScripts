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
  const users = fetch("https://jsonplaceholder.typicode.com/users");

  //* pending state of promise
  console.log(users);

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
        console.log(user);
      console.log(user.name);
    });
  });

  //* Async / Await
  //* Async - makes function return promise
  //* Await - makes function wait for a promise
  const myUsers = {
    userList: []
  };

  const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    //* console.log(jsonUserData);
    return jsonUserData;
  }
  //* myCoolFunction();

  const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
  }
  anotherFunc();

  //* workflow function
  const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });
    console.log(userEmailArray);
    postToWebPage(userEmailArray);
  }
  //* getAllUserEmails();
  const postToWebPage = (data) => {
    console.log(data);
  }
  getAllUserEmails();

  //* second parameter of fetch is an object
  const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
  }

  getDadJoke();

  //* Posting to API
  const jokeObject = {
    id: 'QnWnWSfiqc', 
    joke: "Why can't a bicycle stand on its own? It's two-tired."
  };

  const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jokeObj)
    });
    const jsonPostData = await response.json();
    console.log(jsonPostData);
  }
  postData(jokeObject);

  //* posting to API using url
  const requestJoke = async (firstName, lastName) => {
    //* const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
    const jsonResponse = await response.json();
    //* console.log(jsonResponse.value.joke);
  }
  requestJoke("Bruce", "Lee");

  //* abstract into function
  const getDataFromForm = () => {
    const requestObj = {
      firstName: "Bruce",
      lastName: "Lee",
      categories: ["nerdy"]
    };
    return requestObj;
  }

  const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
  }
  const requestMyJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
  }
  const postJokeToPage = (joke) => {
    console.log(joke);
  }

  //* procedural workflow function
  const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestMyJoke(requestUrl);
    console.log("finished!");
  }
  processJokeRequest();