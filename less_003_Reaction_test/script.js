let reactionTime = document.getElementById('reaction-time'),
    divRandom = document.getElementById('box');
let startTime = new Date,
    currentTime = new Date;
let arrayFigure = ['0', '50'];
let statSteps = 0,
    statsMin = 10,
    statsMax = 0;

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
        statSteps += 1;

        currentTime = (new Date).getTime();
        result = (currentTime - startTime) / 1000;
        statsMin = Math.min(result, statsMin);
        statsMax = Math.max(result, statsMax);
        reactionTime.innerHTML = '' + result + 'мс';
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

function deleteDivStatistic() {
    div = document.getElementById('state-box');
    if (div != null) {
        div.remove();
    }
}

document.getElementById('start').onclick = function() {
    deleteDivStatistic();
    deleteDivFigure();
    newRandomGeometricShape();
}

document.getElementById('finish').onclick = function() {
    deleteDivFigure();
    newDiv = document.createElement('div');
    newDiv.id = 'state-box';
    newH2 = document.createElement('h2');
    newH2.id = 'result';
    newH2.innerHTML = 'Статистика игры:';
    newDiv.append(newH2);
    newP = document.createElement('p');
    newP.id = 'result-steps';
    newP.innerHTML = 'Количество попыток: ' + statSteps;
    newDiv.append(newP);
    newP = document.createElement('p');
    newP.id = 'result-min';
    newP.innerHTML = 'Минимальный результат: ' + statsMin;
    newDiv.append(newP);
    newP = document.createElement('p');
    newP.id = 'result-мax';
    newP.innerHTML = 'Максимальный результат: ' + statsMax;
    newDiv.append(newP);
    divRandom.append(newDiv);
}