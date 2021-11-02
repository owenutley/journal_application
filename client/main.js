console.log('Hello World')

const entry_container = document.getElementById("entry_container")
const entryForm = document.querySelector('form')

const baseURL = `http://localhost:4765/entry`

function addEntry(event){
    event.preventDefault()

    let newEntry = document.createElement("div")
    newEntry.classList.add('Event_conatiner')
    const title = document.getElementById('title')
    const text = document.getElementById('text')
    const rating = document.getElementById('rating')

    let body = {
        title: title.value,
        text: text.value,
        rating: rating.value
    }

    axios.post('http://localhost:4765/entry', body)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

    newEntry.innerText = `${this.title.value}`
    document.section.appendChild(newEntry)
    
}

entryForm.addEventListener("submit", addEntry)