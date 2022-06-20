const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function() {
  let colorSlted = '#';
  for(let i=0;i<6;i++){
    const randNum =Math.floor( Math.random()*colors.length);
    colorSlted+=colors[randNum];
  }
  document.body.style.backgroundColor = colorSlted;
  color.textContent = colorSlted;
});