<?php

    $to = 'it_np@mail.ru';
    $tema = 'Test';
    $body = 'this is test mail';
    $header = 'From: alexandr.g.mad@gmail.com';

    if (mail($to,$tema,$body,$header)) {
        echo 'Письмо отправлено';
    } else {
        echo 'Не получилось отправить письмо';
    }

?>