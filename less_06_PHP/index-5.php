<html>
    <p>Как вас зовут?</p>
    <form method='post'>
        <input type="text" name="name" value="">
        <input type="submit" value="Далее">
    </form>
</html>

<?php

    $arrUsers = array('Саша','Лена','Лёва','Миша');

    if ($_POST) {
        
        $insertName = $_POST['name'];

        if ($insertName != '') {
            
            if (in_array($insertName,$arrUsers)) {
                echo "Добро пожаловать ".$insertName;
            } else {
                echo "Мы не знаем ваше имя";
            }
        } else {
            echo 'вы не ввели имя';
        }

    }
?>