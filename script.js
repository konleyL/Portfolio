const myName = document.querySelector('#name');
const role = document.querySelector('#role');
const header = document.querySelector('header');

document.addEventListener('click', (e) => {
    target = e.target;
    target.style.color = 'var(--green)';
   
})

document.addEventListener('DOMContentLoaded', () => {
    myName.classList.add('slide-up');
    role.classList.add('slide-down');
})