$('#submit-button').click(function() {
    let email = $('#email').val();
    let errorMessage = "",
        notFilled = "";

    if (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) {
        errorMessage += "<p>Вы ввели некорректный e-mail!</p>";
    }

    if ($.isNumeric($('#phone').val()) == false && $('#phone').val() != '') {
        errorMessage += "<p>Ваш номер телефона введен не корректно</p>";
    }

    if ($('#pass').val() != $('#pass2').val()) {
        errorMessage += '<p>Пароли не равны друг другу</p>';
    }

    if (email == '') {
        notFilled += '<p>e-mail</p>';
    }
    if ($('#phone').val() == '') {
        notFilled += '<p>телефон</p>';
    }
    if ($('#pass').val() == '') {
        notFilled += '<p>пароль</p>';
    }
    if ($('#pass2').val() == '') {
        notFilled += '<p>повторный пароль</p>';
    }
    if (notFilled != '') {
        errorMessage += '<p> не заполнены поля: ' + notFilled + '</p>';
    }

    $('#errorMessage').html(errorMessage);

    if (errorMessage != '') {
        $('#errorMessage').css('border', '2px red solid');
    } else {
        $('#errorMessage').css('border', '0');
        alert('Всё ОК');
    }
});
$("#draggable").draggable();
//$("#draggable").draggable({ axis: "x" });
$("#draggable").draggable({ containment: "#parent-div", scroll: false });
$("#draggable").resizable();