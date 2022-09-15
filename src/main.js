import data from './data/harrypotter/data.js';//data de Harry Potter
import {filGry, filHuf, filRav, filSly} from './data.js';
import {sortDataAZ, sortDataZA} from './data.js';
import {humanos} from './data.js';

const root=document.getElementById('root');

let characters=data.characters;

let funFacts=data.funFacts;

let spells=data.spells;

let potions=data.potions;

let books=data.books;

let acumuladorHTML='';

characters.forEach(personaje=>{
    desplegar(personaje)
});

//Despliega lo que quiero conocer
const selConocer = document.querySelector('#selecConocer');

selConocer.addEventListener('change', (event) => {

     if(event.target.value=='PERSONAJES'){
        limpiar();
        characters.forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='D._CURIOSOS'){
        limpiar();
        funFacts.forEach(curioso=>{
            desplegarCuriosos(curioso);
        })
    }

    if(event.target.value=='HECHIZOS'){
        limpiar();
        spells.forEach(hechizo=>{
            desplegarHechizos(hechizo);
        })
    }

    if(event.target.value=='POCIONES'){
        limpiar();
        potions.forEach(pocion=>{
            desplegarPociones(pocion);
        })
    }

    if(event.target.value=='LIBROS'){
        limpiar();
        books.forEach(libro=>{
            desplegarLibros(libro);
        })
    }

});

//Limpia la interfaz antes de desplegar
function limpiar(){
    acumuladorHTML='';
    root.innerHTML=acumuladorHTML;
 }

//Despliega personajes
function desplegar(personaje){
    acumuladorHTML +=`<div class='contenedor'>
    <h3>${personaje.name}</h3> <h5>${personaje.house ? personaje.house : '(sin casa)'}</h5>
    </div>`
    root.innerHTML=acumuladorHTML;
} 

//Despliega datos curiosos
function desplegarCuriosos(curioso){
    acumuladorHTML +=`<div class='contenedorLibro'>
    <h4>${curioso.type}</h4> <h6>${curioso.content}</h6>
    </div>`
    root.innerHTML=acumuladorHTML;
}

//Despliega hechizos
function desplegarHechizos(hechizo){
    acumuladorHTML +=`<div class='contenedor'>
    <h3>${hechizo.name}</h3> <h5>${hechizo.spell_type ? hechizo.spell_type : '(sin tipo)'}</h5>
    </div>`
    root.innerHTML=acumuladorHTML;
}

//Despliega pociones
function desplegarPociones(pocion){
    acumuladorHTML +=`<div class='contenedorLibro'>
    <h4>${pocion.name}</h4> <h6>${pocion.description}</h6>
    </div>`
    root.innerHTML=acumuladorHTML;
}

//Despliega libros
function desplegarLibros(libro){
    acumuladorHTML +=`<div class='contenedorLibro'>
    <h3>${libro.id}</h3> <h3>${libro.title}</h3> <h5>${libro.releaseDay ? libro.releaseDay : '(fecha no especificada)'}</h5>
    </div>`
    root.innerHTML=acumuladorHTML;
} 

//Despliega personajes con filtro casa
const selCasa = document.querySelector('#selecCasa');

selCasa.addEventListener('change', (event) => {

     if(event.target.value==' GYFFINDOR'){
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

//Despliega personajes con ordenamiento alfabético
const selOrden = document.querySelector('#selecOrden');

selOrden.addEventListener('change', (event) => {

     if(event.target.value=='A-Z'){
        limpiar();
        sortDataAZ(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

    if(event.target.value=='Z-A'){
        limpiar();
        sortDataZA(characters).forEach(personaje=>{
            desplegar(personaje);
        })
    }

});

//Porcentaje de personajes de la Especie: Humano
const selPorcentaje = document.getElementById('calculo');

selPorcentaje.addEventListener('click', (event) => {

    if(event.target.id=='calculo'){

        limpiar();
        acumuladorHTML = ''

        let numHum=humanos(characters).length
        let porcentaje = (numHum*100)/characters.length;
        desplegarCalculo(porcentaje)
    }
});

//Muestra cálculo
function desplegarCalculo(porcentaje){
    acumuladorHTML =`<div class='contenedorCalculo'>
        <h1>${porcentaje.toFixed(2) + '%'}</h1> <h6>${'de los personajes son de'}</h6> <h3>${'Especie: HUMANO'}</h3>
        </div>`
        root.innerHTML=acumuladorHTML;
} 

//Regresa a la página inicial
const selRegresar = document.getElementById('regresar');

selRegresar.addEventListener('click', (event) => {

    if(event.target.id=='regresar'){
       limpiar();
       characters.forEach(personaje=>{
        desplegar(personaje)
    });
   }
})
