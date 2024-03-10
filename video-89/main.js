const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use('/blog', blog)
app.use(express.static("public"))

 app.get('/', (req, res) => {
     console.log("hey its a get request")
  res.send('Hello World ')
 })
 app.post('/', (req, res) => {
     console.log("hey its a post request")
     res.send('hello world post request')
   })


  app.put('/', (req, res) => {
    console.log("hey its a put request")
    res.send('Hello World put reequest!')
  })
  app.delete('/', (req, res) => {
    console.log("hey its a delete request")
    res.send('Hello World delete reequest!')
  })
  app.get('/index', (req, res) => {
    console.log("hey its a index ")
 res.sendFile('templates/index.html', {root: _dirname})
})
app.get('/api', (req, res) => {
 res.json({a:1,b:2,c:3,d:4})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})