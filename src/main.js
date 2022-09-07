import data from './data/harrypotter/data.js';//data de Harry Potter
import {sortDataAZ} from './data.js';
import {sortDataZA} from './data.js';
import {filGry} from './data.js';
import {filHuf} from './data.js';
import {filRav} from './data.js';
import {filSly} from './data.js';

const root=document.getElementById('root');

let characters=data.characters;

let acumuladorHTML='';

//Despliega todos los personajes
characters.forEach(personaje=>{
    desplegar(personaje);
})

console.log(data)

//Despliega
function desplegar(personaje){
        acumuladorHTML +=`<div class='contenedor'>
        <h3>${personaje.name}</h3> <h5>${personaje.house  ? personaje.house : 'sin casa'}</h5>
        </div>`
        root.innerHTML=acumuladorHTML;
} 

//Limpia la interfaz antes de desplegar
function limpiar(){
   acumuladorHTML='';
}

console.log(sortDataAZ(characters));

let nombreAZ=document.getElementById('az')
nombreAZ = document.querySelector('.nombre');
nombreAZ.addEventListener('click', () => {
    sortDataAZ(characters).forEach(personaje=>{
        desplegar(personaje);
    })
})
    limpiar()
    console.log(sortDataZA(characters));

let nombreZA=document.getElementById('za')
nombreZA = document.querySelector('.nombre');
limpiar();
nombreZA.addEventListener('click', () => {
    sortDataZA(characters).forEach(personaje=>{
        desplegar(personaje);
    })
})

console.log(filGry(characters))

let casaGry=document.getElementById('gryffindor')
casaGry= document.querySelector('.casa');
limpiar();
casaGry.addEventListener('click', () => {
    filGry(characters).forEach(personaje=>{
        desplegar(personaje);
    })
})

/*const nombreZA = document.querySelector('.nombre');
    nombreZA.addEventListener('click', () => {
        
     sortDataZA(characters).forEach(personaje=>{
        desplegar(personaje);
    })
    })*/

    //console.log(filGry(characters));

   /*limpiar();*/

/*const casaGry= document.querySelector('.gryffindor');
    casaGry.addEventListener('click', () => {
        
     filGry(characters).forEach(personaje=>{
        desplegar(personaje);
    })
    })*/

    console.log(filHuf(characters))
    console.log(filRav(characters))
    console.log(filSly(characters))