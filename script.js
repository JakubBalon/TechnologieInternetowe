const burgerBtn = document.querySelector('.burger')
const faBars = document.querySelector('.fa-ars')
const faX = document.querySelector('.fa-xmark-large')
const nav = document.querySelector('nav ul')

const handleNaw = () => {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    faBars.classList.toggle('hide')
    faX.classList.toggle('hide')
} 

burgerBtn.addEventListener('click',handleNaw)