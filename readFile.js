const fs = require('fs');

fs.readFile('E:/Code/data.txt','utf-8', (error, data) => {
// fs.readFile('data.txt', (error, data) => {
    if (error){
        console.log('error');
    }
   console.log('data : ',data);
});

// console.log('data : ',data);
// console.log('data : ',Showdata);