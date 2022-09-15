//  AQUI VAN LAS FUNCIONES DE FILTRADO Y ORDENADO

//Filtro Gryffindor
export function filGry(characters){
  let gryffindor=characters.filter(personaje => personaje.house == 'Gryffindor')
  return gryffindor
}

//Filtro Hufflepuff
export function filHuf(characters){
  let hufflepuff=characters.filter(personaje => personaje.house == 'Hufflepuff')
  return hufflepuff
}

//Filtro Ravenclaw
export function filRav(characters){
  let ravenclaw=characters.filter(personaje => personaje.house == 'Ravenclaw')
  return ravenclaw
}

//Filtro Slytherin
export function filSly(characters){
  let slytherin=characters.filter(personaje => personaje.house == 'Slytherin')
  return slytherin
}

//Ordena AZ
export function sortDataAZ(characters){
  let charactersOrdenadosAZ=[...characters].sort((a,b) => a.name > b.name ? 1 : -1)
return charactersOrdenadosAZ
}

//Ordena ZA
export function sortDataZA(characters){
  let charactersOrdenadosZA=[...characters].sort((a,b) => a.name > b.name ? -1 : 1)
return charactersOrdenadosZA
}

//Arreglo en base a Especie = Humano
export function humanos(characters){
  let humanos=characters.filter(personaje => personaje.species == 'Human')
  return humanos
}
  