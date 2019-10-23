let min = 0,
    max = 5;

$('#answer-button').click(function() {
    genericNum = Math.floor(Math.random() * (max - min + 1)) + min;

    num = $('#number-of-fingers').val();

    if (num == genericNum) {
        alert('Верно! Загаданное количество пальцев = ' + num);
    } else {
        alert('Ошибочка... Загаданное количество пальцев = ' + genericNum);
    }
});