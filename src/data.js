//  AQUI VAN LAS FUNCIONES DE FILTRADO Y ORDENADO

//Ordena AZ
export function sortDataAZ(characters){
  let charactersOrdenadosAZ=characters.sort((a,b) => a.name > b.name ? 1 : -1)
return charactersOrdenadosAZ
}

//export function opcionNombre(characters){}

//Despliega AZ
/*charactersOrdenadosAZ.forEach(ordenadosAZ=>{
  desplegar(ordenadosAZ);
})*/


//limpiar();

//Despliega ZA
//titulo =`<div class='titulo'><h1>${'ORDENADOS DE Z-A'}</h1></div>`
/*charactersOrdenadosAZ.reverse().forEach(ordenadosZA=>{
    desplegar(ordenadosZA);
  })*/

//limpiar() ; 
  
//Filtra los personajes por la casa Gryffindor
/*let charactersFiltGry = characters.filter(personaje => personaje.house == 'gryffindor')*/

//Despliega personajes de Gryffindor
/*charactersFiltGry.forEach(gryffindor=>{
    desplegar(gryffindor);
  })*/