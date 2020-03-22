const fs = require('fs');

fs.readFile('C:/Nontawat/FreeTime/data.txt','utf-8', (error, data) => {
// fs.readFile('data.txt', (error, data) => {
    if (error){
        console.log('error');
    }
    window.Showdata = data;
});

// console.log('data : ',data);
// console.log('data : ',Showdata);