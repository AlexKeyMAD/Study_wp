let but = document.getElementById('answer-button'),
    min = 0,
    max = 5;

but.onclick = function() {
    genericNum = Math.floor(Math.random() * (max - min + 1)) + min;

    num = document.getElementById('number-of-fingers').value;

    if (num == genericNum) {
        alert('Верно! Загаданное количество пальцев = ' + num);
    } else {
        alert('Ошибочка... Загаданное количество пальцев = ' + genericNum);
    }
}