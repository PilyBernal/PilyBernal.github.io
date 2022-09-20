//  AQUI VAN LAS FUNCIONES DE FILTRADO Y ORDENADO

//Filtro
export function filterByProperty(characters, propertyToFilter, valueToFilter) {
  let filtrados = characters.filter(personaje => personaje[propertyToFilter] == valueToFilter)
  return filtrados
}

//Ordena AZ
export function sortDataAZ(characters) {
  let charactersOrdenadosAZ = [...characters].sort((a, b) => a.name > b.name ? 1 : -1)
  return charactersOrdenadosAZ
}

//Ordena ZA
export function sortDataZA(characters) {
  let charactersOrdenadosZA = [...characters].sort((a, b) => a.name > b.name ? -1 : 1)
  return charactersOrdenadosZA
}
