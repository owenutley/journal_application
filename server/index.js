const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {addEntry, getEntries} = require('./entry_ctrl')

app.get(`/entry`, getEntries)
app.post('/entry', addEntry)

const port = process.env.PORT || 4765

app.listen(port, console.log(`Running on ${port}`))