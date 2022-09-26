const button = document.querySelector('.btn');


var newColor = '#ccc';
var tmpColor;

button.addEventListener('click', (e) => {
    tmpColor = document.querySelector('body').style.background;
    document.querySelector('body').style.background = newColor;
    newColor = tmpColor;
});