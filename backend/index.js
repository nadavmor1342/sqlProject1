const express = require('express')
const app = express()
const allFunction = require('./routes/allFunction')
const cors=require('cors');
app.use(cors())
app.use(express.json())
app.use('/',allFunction)


const port = 3005

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))