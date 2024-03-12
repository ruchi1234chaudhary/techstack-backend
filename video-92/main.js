const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let siteName = "Adidas"
   let siteText = "Search Now"
   
    res.render("templates/index.html", {siteName:siteName,siteText:siteText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "It is a very good brand"
  res.render("templates/blogpost.html", {blogTitle:blogTitle, blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})