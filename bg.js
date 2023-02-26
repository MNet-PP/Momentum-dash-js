const body = document.querySelector('body');
const IMAGE_NUMBER = 3;

function showImage(number) {
    const img = new Image();
    img.src = `images/${number + 1}.jpg`;
    img.classList.add('bgImage')
    body.prepend(img)
}

function getRandomNumber() {
    const num = Math.floor(Math.random() * IMAGE_NUMBER);
    return num;
}

function init() {
    const randomNumber = getRandomNumber();
    showImage(randomNumber);
}

init();