import data from './data/harrypotter/data.js';//data de Harry Potter
import { filterByProperty } from './data.js';
import { sortDataAZ, sortDataZA } from './data.js';

const root = document.getElementById('root');

let characters = data.characters;

let funFacts = data.funFacts;

let spells = data.spells;

let potions = data.potions;

let books = data.books;

let acumuladorHTML = '';

characters.forEach(personaje => {
    desplegar(personaje)
});

//Despliega lo que quiero conocer
const selConocer = document.querySelector('#selecConocer');

selConocer.addEventListener('change', (event) => {

    if (event.target.value == 'PERSONAJES') {
        acumuladorHTML = '';
        characters.forEach(personaje => {
            desplegar(personaje);
        })
    }

    if (event.target.value == 'D._CURIOSOS') {
        acumuladorHTML = '';
        funFacts.forEach(curioso => {
            desplegarCuriosos(curioso);
        })
    }

    if (event.target.value == 'HECHIZOS') {
        acumuladorHTML = '';
        spells.forEach(hechizo => {
            desplegarHechizos(hechizo);
        })
    }

    if (event.target.value == 'POCIONES') {
        acumuladorHTML = '';
        potions.forEach(pocion => {
            desplegarPociones(pocion);
        })
    }

    if (event.target.value == 'LIBROS') {
        acumuladorHTML = '';
        books.forEach(libro => {
            desplegarLibros(libro);
        })
    }

});

//Despliega personajes
function desplegar(personaje) {
    acumuladorHTML += `<div class='contenedor'>
    <h3>${personaje.name}</h3> <h5>${personaje.house ? personaje.house : '(sin casa)'}</h5>
    </div>`
    root.innerHTML = acumuladorHTML;
}

//Despliega datos curiosos
function desplegarCuriosos(curioso) {
    acumuladorHTML += `<div class='contenedorLibro'>
    <h4>${curioso.type}</h4> <h6>${curioso.content}</h6>
    </div>`
    root.innerHTML = acumuladorHTML;
}

//Despliega hechizos
function desplegarHechizos(hechizo) {
    acumuladorHTML += `<div class='contenedor'>
    <h3>${hechizo.name}</h3> <h5>${hechizo.spell_type ? hechizo.spell_type : '(sin tipo)'}</h5>
    </div>`
    root.innerHTML = acumuladorHTML;
}

//Despliega pociones
function desplegarPociones(pocion) {
    acumuladorHTML += `<div class='contenedorLibro'>
    <h4>${pocion.name}</h4> <h6>${pocion.description}</h6>
    </div>`
    root.innerHTML = acumuladorHTML;
}

//Despliega libros
function desplegarLibros(libro) {
    acumuladorHTML += `<div class='contenedorLibro'>
    <h3>${libro.id}</h3> <h3>${libro.title}</h3> <h5>${libro.releaseDay ? libro.releaseDay : '(fecha no especificada)'}</h5>
    </div>`
    root.innerHTML = acumuladorHTML;
}

//Despliega personajes con filtro casa
const selectHouse = document.querySelector('#selectHouse');

selectHouse.addEventListener('change', (event) => {

    acumuladorHTML = ''

    filterByProperty(characters, 'house', event.target.value).forEach(personaje => {
        desplegar(personaje);
    })

});

//Porcentaje de personajes de la Especie: Humano
const calculo = document.querySelector('#calculo');

calculo.addEventListener('click', () => {

    acumuladorHTML = '';

    let numHum = filterByProperty(characters, 'species', 'Human').length
    let porcentaje = (numHum * 100) / characters.length;
    desplegarCalculo(porcentaje)
});

//Despliega personajes con ordenamiento alfabético
const selOrden = document.querySelector('#selecOrden');

selOrden.addEventListener('change', (event) => {

    if (event.target.value == 'A-Z') {
        acumuladorHTML = ''
        sortDataAZ(characters).forEach(personaje => {
            desplegar(personaje);
        })
    }

    if (event.target.value == 'Z-A') {
        acumuladorHTML = ''
        sortDataZA(characters).forEach(personaje => {
            desplegar(personaje);
        })
    }

});

//Muestra cálculo
function desplegarCalculo(porcentaje) {
    acumuladorHTML = `<div class='contenedorCalculo'>
        <h1>${porcentaje.toFixed(2) + '%'}</h1> <h6>${'de los personajes son de'}</h6> <h3>${'Especie: HUMANO'}</h3>
        </div>`
    root.innerHTML = acumuladorHTML;
}

//Regresa a la página inicial
const selRegresar = document.getElementById('regresar');

selRegresar.addEventListener('click', (event) => {

    if (event.target.id == 'regresar') {
        acumuladorHTML = ''
        characters.forEach(personaje => {
            desplegar(personaje)
        });
    }
})
