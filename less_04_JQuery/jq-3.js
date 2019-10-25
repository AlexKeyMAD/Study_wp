$('#circle').click(function() {
    $(this).animate({
        width: '200px',
        height: '200px',
        marginLeft: '100px'
    }, 5000, function() {
        $(this).css('background-color', 'red');
    });
});