import data from './data/harrypotter/data.js';//data de Harry Potter
 let characters=data.characters;
 let html=''
 characters.forEach(unpersonaje=>{
    html+=`<p>${unpersonaje.name}</p>`
 })

 let root=document.getElementById('root');

 root.innerHTML=html;