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

//*************
//OH con Juli
const selCasa = document.querySelector('#selecCasa');

selCasa.addEventListener('change', (event) => {
     console.log(event.target.value);

     if(event.target.value=='GRYFFINDOR'){
        limpiar();
        filGry(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='HUFFLEPUFF'){
        limpiar();
        filHuf(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='RAVENCLAW'){
        limpiar();
        filRav(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='SLYTHERIN'){
        limpiar();
        filSly(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

});



const selOrden = document.querySelector('#selecOrden');

selOrden.addEventListener('change', (event) => {
     //console.log(event.target.value);

     if(event.target.value=='AZ'){
        limpiar();
        sortDataAZ(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='ZA'){
        limpiar();
        sortDataZA(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

});


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


    console.log(characters);
    console.log(sortDataAZ(characters));
    console.log(sortDataZA(characters));

    console.log(filGry(characters))
    console.log(filHuf(characters))
    console.log(filRav(characters))
    console.log(filSly(characters))
