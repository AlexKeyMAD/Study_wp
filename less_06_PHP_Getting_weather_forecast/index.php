<html>
    <head>
        <title>Прогноз погоды</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/files/style.css">
    </head>
    <body>
        <div id="city" class="container-fluid bg-success" class="jumbotron">
            <h1 class="display-3">Прогноз погоды</h1>
            <p class="lead">Введите город на английском языке</p>
            <form class="form-inline" method='post'>
                <label class="sr-only" for="inlineFormInputName2">e-mail</label>
                <div class="input-group mb-2 mr-sm-2">
                    <input type="text" name="city" class="form-control" id="inlineFormInputName2" placeholder="введите город">
                </div>
                <button type="submit" class="btn btn-primary mb-2">Отправить</button>
            </form>
            <?php
                if ($_POST) {
                    $city = $_POST['city'];
                    if ($city != '') {
                        //https://www.weather-forecast.com/locations/<<city>>/forecasts/latest
                        $content = file_get_contents( "https://www.weather-forecast.com/locations/".$city."/forecasts/latest" );
                        $arr0 = explode('<div class="description__text"><div class="show-for-small-only"><div class="description__weather-icon"><div class="weather-wrapper">',$content);
                        $arr1 = explode('<section class="row expanded">',$arr0[1]);
                        $arr2 = explode('Providing a local 3 hourly',$arr1[0]);
                        echo '<div class="alert alert-success" role="alert">'.$arr2[1].'</div>';                        
                    }
                }
            ?>
        </div>
        

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js " integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo " crossorigin="anonymous "></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js " integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1 " crossorigin="anonymous "></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js " integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM " crossorigin="anonymous "></script>
        <!--<script src="files/script.js"></script>-->
    </body>    
</html>

