function changeToRed() {
    document.body.style.backgroundColor = 'red';
}
function changeToBlue() {
    document.body.style.backgroundColor = 'blue';
}
document.getElementById('redButton').addEventListener('click', changeToRed);
document.getElementById('blueButton').addEventListener('click', changeToBlue);
