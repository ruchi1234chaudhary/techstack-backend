const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
//app.use(express.static("public"))

//Middleware-1 logger for our application

app.use((req, res, next) => {
  console.log(req.headers)
  req.ruchi = "i am ruchi and a good girl as well"
  fs.appendFilesync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()   
  })
  //Middleware-2
app.use((req, res, next) => {
    console.log('m2')
    next()
  })
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!')
  })
  app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})