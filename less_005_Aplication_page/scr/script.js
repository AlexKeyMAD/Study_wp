$('body').scrollspy({ target: '#navbar-example' });
$('[data-spy="scroll"]').each(function() {
    let $spy = $(this).scrollspy('refresh');
});