var fs = require('fs')
var data = 'This is New Text Message'
fs.writeFile('./myFolder/myFile.txt' , data,{flag:'a'},(err)=>{
    if(err) return console.log(err);
    console.log('Written Text Inside The File');
})