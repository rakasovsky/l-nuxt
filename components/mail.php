<?php
    $name = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
    $email = isset($_POST['email']) ? strip_tags($_POST['email']) : '';
    $phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
    $message = isset($_POST['message']) ? strip_tags($_POST['message']) : '';

    $error = '';
    $status = 'not sent';

    if (trim($email) == ''){
        $error = 'Введите ваш email';
    } elseif (trim($message) == '') {
        $error = 'Введите сообщение';
    } elseif (strlen($message) < 10) {
        $error = 'Сообщение должно содержать не мение 10 символов';
    }

    if ($error == '') {
        $subject = "=?utf-8?B?".base64_encode($option)."?=";

        $message1 ="\n\nИмя: ".$name. "\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";
        $headers = "From: $email\r\nReplay-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
        mail('rakasovsky1@gmail.com', $subject, $message1, $headers);
        $result = '{"status": "success", "message": "ваше сообщение отправлено."}';
        $status = 'sent';
    } else {
      $result = '{"status": "error", "message": ' . json_encode($error). '}';
    }
    echo $result;
    // $wrapper->assign("error", $error);
    // $wrapper->assign("status", $status);













