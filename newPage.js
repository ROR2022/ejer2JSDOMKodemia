//const url= 'https://rickandmortyapi.com/api/character';

import { url } from "./codigo.js";


const mySearch = window.location.search;
const tempUrl = new URLSearchParams(mySearch);
const id= tempUrl.get('id');

console.log('New Page Character:..');
console.log('id a buscar:..',id);

const getDataByID = async (id)=>{
  try {
    const response = await fetch(`${url}/${id}`);
    const result = await response.json();
    showDataCharacter(result);
    console.log(result);
    return
  } catch (error) {
    console.log(error);
    return
  }
}

const showDataCharacter = (personaje) =>{
  const {image, name, id}= personaje;
  const container = document.querySelector('#cardContainer');
  container.classList.add('text-center','bg-light','m-4');

  const nombre = document.createElement('h6');
  nombre.textContent= name;
  nombre.className= 'm-3 fs-3';
  const img= document.createElement('img');
  img.src= image;
  img.className='rounded w-75';

  container.appendChild(img);
  container.appendChild(nombre);

}


getDataByID(id);