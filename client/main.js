const entry_container = document.getElementById("entry_container")
const entryForm = document.querySelector('form')

const baseURL = `http://localhost:5503/api/entry`

const entriesCallback = ({ data: entries }) => displayEntries(entries)
const errCallback = err => console.log(err)

const getAllEntries = () => axios.get(baseURL).then(entriesCallback).catch(errCallback)
const addEntry = body => axios.post(baseURL, body).then(entriesCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()

    let title = document.querySelector('#title')
    let text = document.querySelector('#text')
    let rating = document.querySelector('#rating')

    let bodyObj = {
        title: title.value,
        text: text.value, 
        rating: rating.value
    }

    addEntry(bodyObj)

    title.value = ''
    text.value = ''
    rating.value = ''
}

function createEntry(body) {
    const entry= document.createElement('div')
    entry.classList.add('journal_entry')

    entry.innerHTML = `<h2>${body.title}</h2>
    <p>${body.text}</p>
    <h3>${body.rating}</h3>`


    entry_container.appendChild(entry)
}

function displayEntries(arr) {
    entry_container.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createEntry(arr[i])
    }
}

// function addAnEntry(event){
//     console.log(event)
//     event.preventDefault()

//     let body = {
//         title: title.value,
//         text: text.value,
//         rating: rating.value
//     }

//     const newEntry = document.createElement("div")
//     newEntry.classList.add('event')

//     newEntry.innerHTML = `<h2>${body.title}</h2>
//     <p>${body.text}</p>
//     <h3>${body.rating}</h3>`

//     const title = document.getElementById('title')
//     const text = document.getElementById('text')
//     const rating = document.getElementById('rating')



//     axios.post('http://localhost:4765/entry', body)
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(err => console.log(err))

//     // newEntry.innerText = `${this.title.value}`
//     // document.section.appendChild(newEntry)
    
// }

entryForm.addEventListener("submit", submitHandler)

getAllEntries()