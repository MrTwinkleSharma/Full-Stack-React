console.log("Script Started..............");

const fs = require('fs');

const data = fs.readFile('text.txt', (error, data)=>{

    if(error)
    console.log(error);
    else{
    console.log("File read successfully.");
    console.log(data.toString());
    }
});

console.log("Script Finished..............");
