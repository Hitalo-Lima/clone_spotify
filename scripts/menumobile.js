let menuMobile = document.querySelector('.menu-mobile');
let menuHeader = document.querySelector('.menu-header');
let menuUl = document.querySelector('.menu-header ul');
let contHeader = document.querySelector('.container-header');
let body = document.body;

menuMobile.addEventListener('click', ()=>{
    menuHeader.classList.toggle('checked');
    menuUl.classList.toggle('checked');
    contHeader.classList.toggle('checked');
    body.classList.toggle('checked');
})

let menuLinks = document.querySelectorAll('.menu-header ul li');

menuLinks.forEach(elements =>{
    elements.addEventListener('click', ()=>{
        menuHeader.classList.remove('checked');
        menuUl.classList.remove('checked');
        contHeader.classList.remove('checked');
        body.classList.remove('checked');
    })
})