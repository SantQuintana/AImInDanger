const port = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()

app.get('/', (requ, res)=>{
    res.json('hi ')
})

app.get('/data', (requ, res)=>{
    res.json('hi asdfasdf')
})

app.listen(port, ()=> console.log(`Server running on PORT ${port}`)) 