let visibleAreas = 2;
$('#b-html').prop('checked', true);
$('#b-result').prop('checked', true);

function styleWorkspace() {
    widthPer = 100 / visibleAreas - 1;
    $('.workspace').css('width', String(widthPer) + '%');
    let arr = $('.butt');
    let i = 0;

    while (i != arr.length) {
        if (arr[i].checked) {
            strVis = 'block';
        } else {
            strVis = 'none';
        }
        $('#' + arr[i].name.replace('b-', 'div-')).css('display', strVis);
        i += 1;
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

$('textarea').on('change keyup paste', function() {
    let textHTML = $('#text-html').val();
    textHTML = "<html><head><style type = 'text/css'>" + $('#text-css').val() + "</style></head><body>" + textHTML + "</body></html>";
    $('#result').contents().find('html').html(textHTML);
});