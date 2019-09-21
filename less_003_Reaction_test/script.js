let reactionTime = document.getElementById('reaction-time');
let startTime = new Date;

function newRandomGeometricShape() {
    //let currentTime = (new Date).getTime();
    //
    let divRandom = document.getElementById('box');

    newElement = document.createElement('div');
    newElement.onclick = function() {
        alert('OK');
    }
    divRandom.append(newElement);

    //
    startTime = startTime.getTime();
}

document.getElementById('start').onclick = function() {
    newRandomGeometricShape();
}