$("#circle").click(function() {
    $('#p1').html('Нажали круг');
    $('#circle').css("background-color", "red");
});

$(".square").click(function() {
    $('iframe').attr('src', 'https://www.blizzard.com/ru-ru/');
});

alert($('body').css('width'));

$('div').click(function() {
    $(this).css('display', 'none');
});