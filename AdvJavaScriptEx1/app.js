const fs = require('fs');// the fs module
const path = require('path');//path module

const students = [
    {
        id: 1,
        firstName: 'Dylan',
        lastName: 'Gamble',
        isSenior: true,
        courseId: 'A112'
    },
    {
        id: 2,
        firstName: 'Anne',
        lastName: 'Greene',
        isSenior: true,
        courseId: 'A112'
    },
    {
        id: 3,
        firstName: 'Sam',
        lastName: 'Wilson',
        isSenior: false
    },
    {
        id: 4,
        firstName: 'Robert',
        lastName: 'Probert',
        isSenior: true,
        courseId: 'A113'
    },
    {
        id: 5,
        firstName: 'Jane',
        lastName: 'Killam',
        isSenior: true,
        courseId: 'A112'
    }
]

console.log(__dirname);//gets current directory our running script is in
console.log(__filename);//fully qualified file path

const file = path.basename(__filename);
const extention = path.extname(__filename);

console.log(file);//should be just app.js
console.log(extention);//should be .js


// Create a directory if it doest not exist
if(!fs.existsSync('data')){
    fs.mkdirSync('data');
}else{
    console.log('The data folder exists')
}

//create a JSON(javascript object notation)
//to write variable to a file we must serialize JSON.stringify()
//if file exists, overwrites
fs.writeFileSync('data/students.json',JSON.stringify(students,null,5));

//rename a directory
if(fs.existsSync('data')){
    fs.renameSync('data','datasource');
}

fs.writeFileSync('data/students.json',JSON.stringify(students,null,5));