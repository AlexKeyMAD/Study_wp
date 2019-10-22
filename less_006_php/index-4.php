<html>
    <p>
    <h2>Простые числа</h2>
    </p>
    <form>
        <label for="number">Предел поиска</label>
        <input type="number" name="endNumber">
        <input type="submit" value="Вычислить">        
    </form>
</html>
<?php

    if ($_GET) {
        $endNumber = $_GET['endNumber'];
        $strNum = 0;
        $sim ='';
        for ($i=1; $i < $endNumber; $i = $i + 2) { 
            
            $num = 0;

            for ($t=1; $t <= $i; $t++) { 
                if ($i % $t == 0) {
                    $num++;
                }
            }

            if ($num < 3) {
                $strNum++;
                if ($strNum % 5 == 0) {
                    $sim = "<br>";
                }else {
                    $sim = '&nbsp;&nbsp;&nbsp;&nbsp';
                }
                echo $i.$sim;
            }
        }
    }
?>