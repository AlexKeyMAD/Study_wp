let reactionTime = $('#reaction-time'),
    divRandom = $('#box');
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

    let widthHeight = String(getRandomNumber(30, 100));

    _width = document.body.clientWidth;

    newElement = document.createElement('div');
    newElement.id = 'figure';
    newElement.style.borderRadius = arrayFigure[getRandomNumber(0, 1)] + '%';
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.width = widthHeight;
    newElement.style.height = widthHeight;
    newElement.style.border = '2px solid';
    newElement.style.position = 'relative';
    newElement.style.left = String(getRandomNumber(0, _width - (Math.floor(_width / 100 * 10))));
    newElement.style.top = String(getRandomNumber(0, 400));

    newElement.onclick = function() {
        statSteps += 1;

        currentTime = (new Date).getTime();
        result = (currentTime - startTime) / 1000;
        statsMin = Math.min(result, statsMin);
        statsMax = Math.max(result, statsMax);
        reactionTime.innerHTML = '' + result + 'мс';
        deleteDivFigure();
        setTimeout(newRandomGeometricShape, getRandomNumber(0, 1000));
    }

    divRandom.append(newElement);

    startTime = (new Date).getTime();
}

function deleteDivFigure() {
    div = $('#figure');
    if (div != null) {
        div.remove();
    }
}

function deleteDivStatistic() {
    div = $('#state-box');
    if (div != null) {
        div.remove();
    }
}

$('#start').click(function() {
    deleteDivStatistic();
    deleteDivFigure();
    newRandomGeometricShape();
});

$('#finish').click(function() {
    deleteDivFigure();

    divRandom.append("<div id='state-box'></div>");
    newDiv = $('#state-box');

    newDiv.append("<h2 id='result'>Статистика игры:</h2>");
    newDiv.append("<p id='result-steps'>Количество попыток: " + statSteps + "</p>");
    newDiv.append("<p id='result-min'>Минимальный результат: " + statsMin + "</p>");
    newDiv.append("<p id='result-steps'>Максимальный результат: " + statsMax + "</p>");

});