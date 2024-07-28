const fs = require('fs')

fs.readdir('./myFolder',(err,files)=>{
    if(err) return console.log(err);
    else{
        console.log('Reading directory');
        console.log(files);
    }
})