<html>
    <head>
        <title>Контакты</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/files/style.css">
    </head>
    <body>
    
    <form id='myForm' method='post'>
        <p>
            <h2>Контакты</h2>
        </p>
        <p>
            <?php
                if ($_POST) {
                    $email = $_POST['email'];
                    $contact = $_POST['contact'];
                    $body = $_POST['message'];

                    if ($email == '' && $contact == '' && $body == '') {
                        echo '<div class="alert alert-warning" role="alert">Для отправки письма необходимо заполнить все поля</div>';
                    } else {
                        if (mail('a.gusakov@sevenhills.kz','Обращение в службу поддержки от '.$contact,$body,'Content-type:text/html; Charset=utf-8\r\nFrom:'.$email)) {
                            echo '<div class="alert alert-success" role="alert">Письмо с вопросом отправлено</div>';
                        } else {
                            echo '<div class="alert alert-danger" role="alert">Не удалось отправить письмо</div>';
                        }
                        
                    }
                }
            ?>
        </p>
        <div class="form-group">
            <label for="exampleInputEmail1">Адрес электронной почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Введите email" name='email'>
        </div>
        <div class="form-group">
            <label for="exampleInputText">Контакт</label>
            <input type="text" class="form-control" id="exampleInputText" placeholder="Введите контактное лицо" name='contact'>
        </div>
        <div class="form-group">
            <label for="exampleInputBody">Что бы вы хотели у нас спросить?</label>
            <textarea class="form-control" rows="3" id='exampleInputBody' name='message'></textarea>
        </div>
        <button type="submit" class="btn btn-default">Задать вопрос</button>
    </form>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js " integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo " crossorigin="anonymous "></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js " integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 " crossorigin="anonymous "></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js " integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM " crossorigin="anonymous "></script>
        
    </body>    
</html>