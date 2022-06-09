let timer = document.querySelector('.timer');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');

let h = 0;
let m = 0;
let s = 0;

let bool = true

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

startButton.addEventListener('click', () => {
  async function change() {
    bool = true;
    while(bool) {
      s++;
      timer.innerHTML = h + ':' + m + ':' + s;
      await sleep(1000);

      if(s == 59) {
        s = 0;
        m++;
      }
      if(m == 60) {
        m = 0;
        s = 0;
        h++;
      }
    }
  }
  change();
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  bool = false;
  startButton.disabled = false;
});
