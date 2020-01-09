console.log('Starting notes')
const fs = require('fs')
const fetch = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch (err) {
        return []
    }
}
const ADD = (title, body) => {
    const note = {
        title:title,
        body:body
    }
    const notes = fetch()
    notes.push(note)
    fs.writeFileSync("notes.txt", JSON.stringify(notes))
    console.log(notes)
}
const Remove = (title) => {
    const notes = fetch()
    const filtrednotes = notes.filter(el => el.title !== title)
    fs.writeFileSync("notes.txt", JSON.stringify(filtrednotes))
    console.log(filtrednotes)
}
const Read = (title) => {
    const notes = fetch()
    const filtrednotes = notes.filter(el => el.title == title)
    console.log(filtrednotes)
}
const List = () => {
    const notes = fetch();
   console.log(notes)
}

module.exports = {
    ADD, Remove, Read, List
}