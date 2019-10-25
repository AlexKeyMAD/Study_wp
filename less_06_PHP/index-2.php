<?php

$age = 25;

if ($age < 18) {
    echo 'Ты малой, брысь от сюда';
} else {
    echo 'Welcome';
}

echo "<br>";
echo "<br>";

for ($i=2;$i <= 30; $i=$i+2) { 
    echo $i."<br>";
}
echo "<br>";

for ($i=10; $i >= 0; $i--) { 
    echo $i."<br>";
}
echo "<br>";

$arrayMy = array("a","b","c");
for ($i=0; $i < sizeof($arrayMy); $i++) { 
    echo $arrayMy[$i]."<br>";
}
echo "<br>";
foreach ($arrayMy as $key => $value) {
    echo "символ №".($key + 1)." - это ".$value."<br>";
    $arrayMy[$key] = $key.$arrayMy[$key];
}

echo "<br>обновленный массив<br>";

foreach ($arrayMy as $key => $value) {
    echo "символ №".($key + 1)." - это ".$value."<br>";
}
echo "<br>";

$t = 0;
while ($t <= sizeof($arrayMy)) {
    echo $arrayMy[$t]."<br>";
    $t++;
}

echo "<br>таблица умножения на 5<br>";

$a = 1;

while ($a <= 10) {
    echo "5 x ".$a." = ".($a * 5)."<br>";
    $a++;
}

?>