
require('dotenv').config()
const express = require('express')
//instead of 1st line wwe can also write 3rd line
//import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})
app.get('/login', (req, res) => {
    res.send('Hello Login!')
})
app.get('/youtube',(req,res)=>{
  res.send('<button id="youtubeButton">Go to YouTube</button>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
