const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) =>
{
    res.render('pages/home')
})

app.get('/contact', (req, res) =>
{
    res.render('pages/contact')
})

app.get('/work', (req, res) =>
{
    res.render('pages/work')
})

app.get('/detail/:id', (req, res) =>
{
    res.render('pages/detail')
})

app.listen(port, () =>
{
    console.log(`Listening at http://localhost:${port}`)
})
