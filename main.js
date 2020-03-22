// const sum = require('./test1.js');
// const plus = sum(4,6);
// console.log(plus);

// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(function(i) {
//   console.log(i)
// })

// let name = {
//     FristName : "Nontawat",
//     LastName : "Thiamnak"
// };

// const fName = name.FristName;
// const lName = name.LastName;

// console.log(name.FristName,name.LastName,name.age);
// console.log(name);
// name.age = 22;
// console.log(name);
// console.log(name.FristName,name.LastName,name.age);
// console.log(fName,lName);

// const test = 'N'


// Connect String & function
/* 
const ahoy = name => {
    console.log(`Ahoy ${name}`);
  };

ahoy(8); // Call ahoy by ahoy is function inside () put string or number
// result is Ahoy 8
*/

// Call back
/*
const hello = name => console.log(`Hello ${name}`);
const hi = name => console.log(`Hi ${name}`);

const myCallback = callback => callback('Non');

myCallback(hi);
*/

const hello = (err, name) =>{
  if (err){
    throw error;
  }
  console.log(`Hello ${name}`);
}

const hi = (err,name) => {
  if (err){
    throw error;
  }
  console.log(`Hi ${name}`)
}

const myCallback = callback => {
  if(!callback){
    callback(new Error('No call back provided'));
  }
  callback(null, 'Non');
}

myCallback(hello);