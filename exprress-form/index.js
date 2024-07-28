const express = require('express');
const app = express();

const {body,validationResult} = require('express-validator')
app.use(express.json())

app.post('/signup',[
    [
        body('name').notEmpty(),
        body('email').isEmail(),
        body('password').notEmpty()
    ]
],
async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    res.status(200).json({success:'Successfully Submitted'})
})

app.listen(3000,()=>{
    console.log('App is listening at port 3000');
})