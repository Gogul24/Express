var fs = require('fs')

fs.mkdir('./myFolder',(err)=>{
    if(err){
        return console.log(err)
    }
    console.log("Directory Created ");
})