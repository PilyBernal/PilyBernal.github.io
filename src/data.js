// estas funciones son de ejemplo AQUI VAN LAS FUNCIONES DE FILTRADO Y ORDENADO

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

import data from './data/harrypotter/harry.json'

let characters = data.characters;

function filtrar(characters){
const gryffindor=characters.fiter(characters=>characters.house='Gryffindor');

return(characters);
}
export default gryffindor;
