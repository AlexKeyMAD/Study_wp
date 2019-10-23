$('body').scrollspy({ target: '#MyNav' });
$('[data-spy="scroll"]').each(function() {
    let $spy = $(this).scrollspy('refresh');
});