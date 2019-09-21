let reactionTime = document.getElementById('reaction-time');
let startTime = new Date,
    currentTime = new Date;
let arrayFigure = ['0', '50'];

function getRandomNumber(min, max) {
    genericNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return genericNum;
}

function getRandomColor() {
    _r = getRandomNumber(0, 255);
    _g = getRandomNumber(0, 255);
    _b = getRandomNumber(0, 255);
    textColor = 'rgb(' + _r + ', ' + _g + ', ' + _b + ')';
    return textColor;
}

function newRandomGeometricShape() {

    let divRandom = document.getElementById('box');
    let widthHeight = String(getRandomNumber(20, 200));

    newElement = document.createElement('div');
    newElement.id = 'figure';
    newElement.style.borderRadius = arrayFigure[getRandomNumber(0, 1)] + '%';
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.width = widthHeight;
    newElement.style.height = widthHeight;
    newElement.style.border = '2px solid';
    newElement.style.position = 'relative';
    newElement.style.left = String(getRandomNumber(0, 800));
    newElement.style.top = String(getRandomNumber(0, 400));

    newElement.onclick = function() {
        currentTime = (new Date).getTime();
        reactionTime.innerHTML = '' + ((currentTime - startTime) / 1000) + 'мс';
        deleteDivFigure();
        newRandomGeometricShape();
    }

    divRandom.append(newElement);

    startTime = (new Date).getTime();
}

function deleteDivFigure() {
    div = document.getElementById('figure');
    if (div != null) {
        div.remove();
    }
}

document.getElementById('start').onclick = function() {
    if (document.getElementById('figure') != null) {
        deleteDivFigure();
    }
    newRandomGeometricShape();
}

document.getElementById('finish').onclick = function() {
    deleteDivFigure();
}