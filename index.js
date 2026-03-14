const express = require('express');
const morgan = require('morgan')
const index = express();
//const dbconnection = require('./config/db')
//const usermodel = require('./models/user')

//this is additional code.

index.use(morgan('dev'))

index.use(express.json( ))
index.use(express.urlencoded({ extended: true }))

index.use(express.static("public"))

index.set("view engine", 'ejs')

index.use((req,res,next)=>{
    console.log("this is custem midelware")

    return next()
})

index.get('/', (req, res) => {
    res.render('ind')
  // res.send("this is localhost 3000 ")
})

index.get('/ticgame', (req, res) => {
    res.render('tic')
})
// index.get('/create', async (req, res)=> {
//     let createduser= await usermodel.create({
//          username: "ritik ",
//          gmail: "ritik@c.com",
//          passward: "ritik"

//         })
//         res.send(createduser);
//     })
index.get('/profile', (req, res) => {
    res.send("this is profile page")
})
index.post('/get-form-data',(req, res) => {
    console.log(req.body)
    res.send('data received')

})

index.listen(3000);