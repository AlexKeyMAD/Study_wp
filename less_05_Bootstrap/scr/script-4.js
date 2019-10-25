$('#exampleModal').on('show.bs.modal', function(event) {
    let button = $(event.relatedTarget),
        recipient = button.data('name'),
        modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
});

$('#exampleModal').on('hidden.bs.modal', function(e) {
    alert('Окно закрыто');
})

$(function() {
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
});

$('.popover-dismiss').popover({
    trigger: 'focus'
})

$('#btn-tool').on('shown.bs.tooltip', function(ee) {
    alert('OK');
});