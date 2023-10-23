// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// Trasformare la stringa foto in una immagine effettiva

"use strict";

const cards = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    },
];

const rowEl = document.querySelector(".row");

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    printCol(cards[i]);
};

function printCol(card) {
    const col = document.createElement('div');
    col.classList.add('col-4', 'mt-4');
    const template =
    `
    <div class="card text-center">
        <img class="card-img-top" src="img/${card.picture}" alt="Title">
        <div class="card-body">
        <h4 class="card-title">${card.name}</h4>
        <p class="card-text">${card.role}</p>
        </div>
    </div>
    `
    col.innerHTML = template;
    rowEl.append(col);
};

const btnSubmit = document.querySelector('button');
btnSubmit.addEventListener('click', function(){
    const newCard = {
        name: document.getElementById('nome').value,
        role: document.getElementById('ruolo').value,
        picture: document.getElementById('immagine').value
    }
    console.log(newCard);
    cards.push(newCard);
    printCol(newCard);
})
