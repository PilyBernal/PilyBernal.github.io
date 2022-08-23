import data from './data/harrypotter/data.js';//data de Harry Potter
const root = document.getElementById('root')

root.classList = 'harry-style'

let personajes = data.characters
const generadorHTML = (characters) => {
    const div = document.createElement('div')

    div.classList = 'divStyle'
    let titleName = document.createElement('h4')
    titleName.textContent = characters.name

    //const img = document.createElement('img')
    //img.setAttribute('src', characters.img)

    div.append(titleName)
    return div
}

personajes.forEach(oneCharacters => root.appendChild(generadorHTML(oneCharacters)))