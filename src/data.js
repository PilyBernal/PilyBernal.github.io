export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

//Funcion para ordenar nombres 
export const sortAZ= (arrData)=> arrData.sort((a, b) => {
  //   if(arrData == []) throw(TypeError("Empty array"))
     if(a.name< b.name){ 
       return -1
     } if (a.name> b.name){
       return 1
     }
       return 0
   });
 
//Función para filtrar las especies
export const filterSpecies =  (arrData, specie)=> {
  let filterData = arrData.filter((element) => {
    return element.species === specie;
  });
  return filterData;
}