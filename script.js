const myName = document.querySelector('#name');
const role = document.querySelector('#role');
const header = document.querySelector('header');
const arrow = document.querySelector('#arrow')

document.addEventListener('click', (e) => {
    target = e.target;
    target.style.color = 'var(--green)';
   
})

document.addEventListener('DOMContentLoaded', () => {
    myName.classList.add('slide-up');
    role.classList.add('slide-down');
    arrow.classList.add('slide-down-arrow');
})