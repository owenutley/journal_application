const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {addEntry, getEntries, deleteEntry} = require('./entry_ctrl')

app.get(`/api/entry`, getEntries)
app.post('/api/entry', addEntry)
app.delete("/api/entry/:id", deleteEntry)

const port = 5503

app.listen(port, console.log(`Running on ${port}`))