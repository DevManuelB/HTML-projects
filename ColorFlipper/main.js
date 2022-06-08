const button = document.querySelector('#btn');
const body = document.querySelector('body');
const c = document.querySelector('#c');

const colors = ['red', 'green', 'blue', 'purple', 'aqua', 'yellow'];

button.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomColor];
  console.log(colors[randomColor]);
  c.innerHTML = 'Color: ' + colors[randomColor];
});
