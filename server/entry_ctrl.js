const entries = require('./entries.json')
let globalId = entries[entries.length - 1].id + 1

module.exports = {
    getEntries: (req, res) => res.status(200).send(entries),
    addEntry: (req, res) => {
        const {title, text, rating} = req.body
            console.log(req.body)

        let newEntry = {
            title,
            text,
            rating,
            id: globalId
        }
        entries.push(newEntry)
        res.status(200).send(entries)
        globalId++
    },
    deleteEntry: (req, res) => {
        console.log('req :', req.params.id)
        console.log('res :', res.status(200))
        let index = entries.findIndex(elem => elem.id === +req.params.id)
        entries.splice(index, 1)
        res.status(200).send(entries)
    }
}
