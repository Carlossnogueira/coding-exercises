<?php

/*
Crie um array de inteiros com 5 posições. Atribua valores manualmente e imprima todos usando
um for tradicional.
*/

$string = [];

for ($i = 0; $i < 5; $i++) {
    $text = intval(readline("Entre um número\n"));
    $string[intval($i)] = $text;
}

foreach($string as $key){
    echo $key;
}