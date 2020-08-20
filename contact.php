<?php

if (isset($_POST['submit'])) {
    $mailFrom = $_POST['email'];
    $emailText = $_POST['textarea'];

    $mailTo = "geartybrian@gmail.com";
    $headers = "From: ".$mailFrom;
    $text = ".\n\n".$emailText;

    mail($mailTo, $text, $headers);

    header("Location : index.php?mailsent");
}