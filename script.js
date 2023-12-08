const provoBtn = document.querySelector('#provo-btn');
const rifilloBtn = document.querySelector("#rifillo-btn");
const input = document.querySelector("#numri");
const tekstiProvo = document.querySelector('#teksti-provo');
const historiaNumrave = document.querySelector('#historia-numrave');


let numriRendomte = Math.ceil(Math.random() * 100);
let historia = [];
let numriPerdoruesit = 0;

provoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("U klikua butoni Provo")
})

rifilloBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Rifillo")
})




