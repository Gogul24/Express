var fs = require('fs')

fs.rename('./myFolder/myFile.txt','myFolder/newFile.txt',(err)=>{
    if(err) return console.log(err);
    console.log("Renamed");
})