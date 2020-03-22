// variable **const is variable can't change value
//          **let is variable can change value

const fs = require('fs');

const part = "E:/Code/";
const namefile = "data";
const lastnamefile = ".txt";


fs.readFile(part + namefile + lastnamefile,'utf-8', (error, data) => {
// fs.readFile('data.txt', (error, data) => {
    if (error){
        console.log('error');
    }
   console.log('data : ',data);
});

// console.log('data : ',data);
// console.log('data : ',Showdata);