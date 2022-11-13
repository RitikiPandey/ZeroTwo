let btn = document.querySelector('#menu-button');
let m = document.querySelector('#menu');
btn.addEventListener('click', () => {
  m.classList.toggle('hidden');
});