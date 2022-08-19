import data from './data/harrypotter/data.js';//data de Harry Potter
 const root = document.getElementById('root')

let personajes = data.characters
console.log(personajes);



const generadorHTML = (characters)=>{
    const div = document.createElement('div')
    div.classList = 'harry-style'

    let titleName = document.createElement('h2') 
    titleName.textContent=characters.name

   div.append(titleName)
   return div 
   
    }
personajes.forEach(oneCharacters=>root.appendChild(generadorHTML(oneCharacters)))