const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit',(req,res)=>{
    const data = req.body
    console.log(data);
    if(data.name != '' && data.email != '')
    res.send('<h1>Form submitted successfully</h1>')
    else res.send('Invalid input')
})

app.listen(3000,()=>{
    console.log('App is running at port 3000');
})