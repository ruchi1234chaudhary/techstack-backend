const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
//app.get or app.post or app.put or app.delete (path handler)
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/about', (req, res) => {
  res.send('<h1>Hello about me!</h1>')
})
app.get('/contact', (req, res) => {
  res.send('<h1>Hello contact me!</h1>')
})
app.get('/blog', (req, res) => {
  console.log(req.params)// will output {slug: 'intro-to-padosi'}
  console.log(req.query)// will output {mode:'dark', region: 'in'}
  res.send('<h1> welcome to my blog !</h1>')
})
// app.get('/blog/:slug', (req, res) => {
//   //logic to fetch {slug} from the db
//   res.send(`hello ${req.params.slug} `)
// })



// app.get('/blog', (req, res) => {
//   //logic to fetch intro to js from db
//   res.send('<h1> welcome to intro-to-js !<h1>')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from db
//   res.send('<h1> welcome to intro-to-python !<h1>')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})