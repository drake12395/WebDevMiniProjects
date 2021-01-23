const container = document.getElementById('container');
let allColors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
let greyScale = ['#E0E0E0', '#B0B0B0', '#888888', '#F8F8F8', '#202020'];
let blueScale = ['#B0E2FF', '#3299CC', '#236B8E', '#05EDFF', '#2E37FE'];
let redScale = ['#ff0000', '#ff4c4c', '#ff7f7f', '#ffb2b2', '#ffcccc'];
const squares = 400;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(el) {
  const color = getColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.background = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
}

function getColor() {
  document.getElementById('grey').addEventListener('click', function () {
    allColors = greyScale;
  });

  document.getElementById('blue').addEventListener('click', function () {
    allColors = blueScale;
  });

  document.getElementById('red').addEventListener('click', function () {
    allColors = redScale;
  });

  document.getElementById('allColors').addEventListener('click', function () {
    allColors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
  });

  return allColors[Math.floor(Math.random() * allColors.length)];
}
