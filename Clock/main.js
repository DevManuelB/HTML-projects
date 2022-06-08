function updateTime() {
  let clock = new Date();

  let h = clock.getHours();
  let m = clock.getMinutes();
  let s = clock.getSeconds();
  let time = h + ':' + m + ':' + s;

  document.querySelector('.clock').innerHTML = time;
}
setInterval(updateTime, 1000);
