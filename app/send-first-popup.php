<?
if((isset($_POST['name']) && $_POST['name']!="") && (isset($_POST['nachname']) && $_POST['nachname']!="") && (isset($_POST['email']) &&$ _POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@magento2migration.shop';
        $subject = 'Beratung';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Nachname: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Telephone: '.$_POST['tel'].'</p>
                        <p>Packet: '.$_POST['packet'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: <info@magento2migration.shop>\r\n";
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>



