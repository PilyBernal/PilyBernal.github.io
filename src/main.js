import data from './data/harrypotter/data.js';//data de Harry Potter

function createCards(arrData) {
   let arrCards = []
   arrData.forEach((item) => {
      const div = document.createElement('div');
      div.innerHTML = `<p>${item.name}</p>
      <p>${item.house ? item.house : 'sin casa'}</p>`;

      div.className = 'card'
      arrCards.push(div)
   })
   return arrCards;
}


window.addEventListener('load', () => {
   let characters = data.characters;

   let root = document.getElementById('root');

   createCards(characters).forEach((card)=>{
      root.appendChild(card);
   });

})
