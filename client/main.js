const entry_container = document.getElementById("entry_container")
const entryForm = document.querySelector('form')

const baseURL = `http://localhost:5500/api/entry`

const entriesCallback = ({ data: entries }) => displayEntries(entries)
const errCallback = err => console.log(err)

const getAllEntries = () => axios.get(baseURL).then(entriesCallback).catch(errCallback)
const addEntry = body => axios.post(baseURL, body).then(entriesCallback).catch(errCallback)
const deleteEntry = id => axios.delete(`${baseURL}/${id}`).then(entriesCallback).catch(errCallback)

function submitHandler(event) {
    event.preventDefault()

    let title = document.querySelector('#title')
    let text = document.querySelector('#text')
    let rating = document.querySelector('#rating')

    let bodyObj = {
        title: title.value,
        text: text.value, 
        rating: rating.value,
    }

    addEntry(bodyObj)

    title.value = ''
    text.value = ''
    rating.value = ''
}

function createEntry(body) {
    const entry = document.createElement('div')
    entry.classList.add('journal_entry')
    console.log(body)
    entry.innerHTML = `
    <div  class="input" id="split_content>
    <h2 class="text_align">${body.title}</h2>
    <p class="text_align">${body.text}</p>
    <h3 class="text_align">${body.rating}</h3>
    <button class="btn" onclick="deleteEntry(${body.id})">delete</button>
    <div>`


    entry_container.appendChild(entry)
}

function displayEntries(arr) {
    entry_container.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createEntry(arr[i])
    }
}
const get_all = document.getElementById("get_all")
get_all.addEventListener('click', getAllEntries)

entryForm.addEventListener("submit", submitHandler)

