import data from './data/harrypotter/data.js';//data de Harry Potter
import { sortAZ, filterSpecies } from './data.js';
// data
const personajes = data.characters
// Entrar a los nodos de DOM
const root = document.getElementById('root')
const specie = document.getElementById('specie')

root.classList = 'harry-style'


// Crear  HTML
const generadorHTML = (characters) => {
    const div = document.createElement('div')
    div.classList = 'divStyle'

    const titleName = document.createElement('h4')
    titleName.textContent = characters.name

    let species = document.createElement('h5')
    species.textContent = characters.species

    let houses = document.createElement('h5')
    houses.textContent = characters.house

    let books = document.createElement('h5')
    books.textContent = characters.books_featured_in
    div.append(titleName, species, houses, books)
    return div

}
personajes.forEach(oneCharacters => root.appendChild(generadorHTML(oneCharacters)))

//Filtrar data
specie.addEventListener('change',(e)=>{
    console.log(filterSpecies(personajes, e.target.value));
    
})

