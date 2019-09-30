let visibleAreas = 2;
$('#b-html').prop('checked', true);
$('#b-result').prop('checked', true);

function styleWorkspace() {
    widthPer = 100 / visibleAreas - 1;
    $('.workspace').css('width', String(widthPer) + '%');

    for (let item of $('.butt')) {
        if (item.checked) {
            strVis = 'block';
        } else {
            strVis = 'none';
        }
        $('#' + item.name.replace('b-', 'div-')).css('display', strVis);
    }

}

styleWorkspace();

$(".butt").checkboxradio({
    icon: false
});

$('.butt').on('change', function() {
    if (this.checked) {
        visibleAreas += 1;
    } else {
        visibleAreas -= 1;
    }
    styleWorkspace();
});

$('textarea').keypress(function(sym) {
    $('#result').val($('#text-html').val());
});