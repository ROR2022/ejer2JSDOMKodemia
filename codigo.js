//import { objetoRick } from "./api.js";

let data = [];

const url= 'https://rickandmortyapi.com/api/character';



const getAllData = async ()=> {
    try {
        const response = await fetch(url);
        const result = await response.json();
        data= [...result.results];
        showCards(data);
        return
    } catch (error) {
        console.log(error);
        return
    }
}

const showAll = document.querySelector('#showAll');
showAll.className='btn btn-primary d-block ms-auto me-auto my-3'
showAll.addEventListener('click',()=>{
    getAllData();
    showAll.classList.add('d-none');
})



const cardsContainer= document.querySelector('#containerCards');

const showNewData = (id)=>{
    const newData= data.filter((item)=>item.id!==id);
    data=[...newData];
    //console.log(newData);
    cardsContainer.innerHTML='';
    showCards(newData);
}

const showModalCard = ({image,name})=>{

    const modalContainer = document.createElement('div');
    modalContainer.className='miModalContainer';

    const nameCharacter= document.createElement('h6');
    nameCharacter.textContent=name;
    nameCharacter.className='text-info fs-4 text-center mt-5';
    const imageCharacter= document.createElement('img');
    imageCharacter.src= image;
    imageCharacter.className='rounded w-50 d-block ms-auto me-auto';
    const deleteButon= document.createElement('button');
    deleteButon.textContent='Ocultar';
    deleteButon.className='btn btn-secondary m-3 d-block ms-auto me-auto';
    deleteButon.addEventListener('click',(e)=>{
        modalContainer.classList.add('d-none');
    })

    modalContainer.appendChild(nameCharacter);
    modalContainer.appendChild(imageCharacter);
    modalContainer.appendChild(deleteButon);


    document.body.appendChild(modalContainer);

    return
}


const makeCard = (personaje)=>{
    const {name,id,image} = personaje;

    const tarjeta= document.createElement('div');
    tarjeta.className='border m-2 rounded border-2 text-center p-2';
    tarjeta.id=id;

    const nameCharacter= document.createElement('h6');
    nameCharacter.textContent=name;
    nameCharacter.className='text-info fs-4';
    const imageCharacter= document.createElement('img');
    imageCharacter.src= image;
    imageCharacter.className='rounded'
    const deleteButon= document.createElement('button');
    deleteButon.textContent='Eliminar';
    deleteButon.className='btn btn-secondary m-3';
    deleteButon.addEventListener('click',(e)=>{
        showNewData(id);
    })
    const modalButton= document.createElement('button');
    modalButton.textContent='modalCard';
    modalButton.className='btn btn-primary m-3 d-block ms-auto me-auto';
    modalButton.addEventListener('click',()=>{
        showModalCard(personaje);
    })

    tarjeta.appendChild(imageCharacter);
    tarjeta.appendChild(nameCharacter);
    tarjeta.appendChild(modalButton);
    tarjeta.appendChild(deleteButon);

    return tarjeta
}






const showCards = (cards)=>{

    cards.forEach((personaje)=>{
        const tarjeta= makeCard(personaje);
        cardsContainer.appendChild(tarjeta);
    })

}





