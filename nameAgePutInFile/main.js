const name = document.querySelector('.name');
const age = document.querySelector('.age');
const button = document.querySelector('.button');
const select = document.querySelector('.select');

button.addEventListener('click', () => {
  let list = document.createElement('option');
  list.setAttribute('selected', 'true');
  select.appendChild(list);
  let inputNameValue = name.value;
  let inputAgeValue = age.value;
  list.innerHTML = inputNameValue + ' (' + inputAgeValue + ')';
  name.value = '';
  age.value = '';
});
