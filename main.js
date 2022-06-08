let addButton = document.querySelector('#addB');
let lowerButton = document.querySelector('#lower');
let resetButton = document.querySelector('#reset');
const counter = document.querySelector('#counter');

function colorChange(ele) {
  if(ele.innerHTML > 0) {
    ele.style.color = '#00ff00';
  } else if(ele.innerHTML < 0) {
    ele.style.color = '#ff0000';
  } else {
    ele.style.color = 'rebeccapurple';
  }
}

addButton.addEventListener('click', () => {
  counter.innerHTML++;
  colorChange(counter);
});

lowerButton.addEventListener('click', () => {
  counter.innerHTML--;
  colorChange(counter);
})

resetButton.addEventListener('click', () => {
  counter.innerHTML = '0';
  colorChange(counter);
})
