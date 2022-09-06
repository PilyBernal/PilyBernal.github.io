import data from './data/harrypotter/data.js';//data de Harry Potter
import {sortDataAZ} from './data.js';
//import charactersOrdenadosAZ from './data.js/sortData';

const root=document.getElementById('root');

let characters=data.characters;

let acumuladorHTML='';

//Despliega todos los personajes
//titulo =`<div class='titulo'><h1>${'PERRITOS'}</h1></div>`
characters.forEach(personaje=>{
    desplegar(personaje);
})

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

limpiar();

/*sortDataAZ(characters).forEach(personaje=>{
    desplegar(personaje);
})*/

//function opcionNombre(){
   // let orden = document.getElementById('a-z');
  
   //if (orden='a-z'){

    //orden.addEventListener('click'), 
    
    sortDataAZ(characters).forEach(personaje=>{
        desplegar(personaje);
});
//} else{

    //orden.addEventListener('click'), sortDataAZ.reverse(characters).forEach(personaje=>{
        //desplegar(personaje);
//});
//}
//}

limpiar();   