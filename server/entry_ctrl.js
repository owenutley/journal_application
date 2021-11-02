const entries = require('./entries.json')
let globalId = entries[entries.length - 1].id + 1

module.exports = {
    getEntries: (req, res) => res.status(200).send(entries),
    addEntry: (req, res) => {
        const {title, text, rating} = req.body
        console.log('hit add entry')
        let newEntry = {
            title,
            text,
            rating,
            id: globalId
        }
        entries.push(newEntry)
        res.status(200).send(entries)
        globalId++
    }
}