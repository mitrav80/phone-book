<?php
if ($_POST) {
    $text = json_encode($_POST);
    $fs = fopen('input.txt', 'a');
    fwrite($fs, $text);
    fclose($fs);
}
