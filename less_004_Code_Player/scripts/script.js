let visibleAreas = 2;
$('#div-css').css('display', 'none');
$('#div-js').css('display', 'none');

function styleWorkspace() {
    widthPer = 100 / visibleAreas - 1;
    $('.workspace').css('width', String(widthPer) + '%');
}

styleWorkspace();