import { objetoRick } from "./api.js";

const cardsContainer= document.querySelector('#containerCards');


objetoRick.results.map((el)=>{
    //console.log(el.name);
    const name= document.createElement('h6');
    name.textContent=el.name;
    const id= document.createElement('p');
    id.textContent=el.id;
    const estatus = document.createElement('p');
    estatus.textContent= el.status;
    const especies = document.createElement('p');
    especies.textContent= el.species;
    const type = document.createElement('p');
    type.textContent= el.type;
    const gender= document.createElement('p');
    gender.textContent= el.gender;
    const image= document.createElement('img');
    image.src= el.image;

    const tarjeta= document.createElement('div');
    tarjeta.appendChild(image);
    tarjeta.appendChild(id);
    tarjeta.appendChild(name);
    tarjeta.appendChild(estatus);
    tarjeta.appendChild(especies);
    tarjeta.appendChild(type);
    tarjeta.appendChild(gender);
    
    tarjeta.className='border m-2 rounded border-2 text-center';
    cardsContainer.appendChild(tarjeta);
})