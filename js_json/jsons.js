//* JavaScripts & JSON
//* Create JSON Data

const myData = {
    'name': 'cici',
    'age': 23,
    'hobby': {
        'reading': 'Novels',
        'plaiting': 'nodeless',
        'writings': 'Literature',
    }
}

//* Access JSON Data
console.log(myData);
console.log(myData.name); //* Using dot notation
console.log(myData['age']); //* Using square bracket[]

//* Converting JavaScript objects to JSON
const data = JSON.stringify(myData); //* Use the parse keyword

//* Access the data
console.log(data);

//* Convert JSON to JavaScript objects
const jsToJSON = JSON.parse(data);
console.log(jsToJSON)