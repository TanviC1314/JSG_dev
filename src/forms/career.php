<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

// passing true in constructor enables exceptions in PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
    $mail->isSMTP();
    $mail->Host = 'smtp.office365.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = 'legalnotice@sc-legal.in'; // YOUR gmail email
    $mail->Password = 'hpffgknhmxmbyjnx'; // YOUR gmail password

    // Sender and recipient settings
    $mail->setFrom('legalnotice@sc-legal.in', 'SC Legal');
    $mail->addCC('parichay@sc-legal.in', 'Parichay Sharma');
    $mail->AddCC('ankita@sc-legal.in', 'Ankita Chatterjee');
    $mail->addReplyTo('legalnotice@sc-legal.in', 'SC Legal'); // to set the reply to

    // Setting the email content
    $mail->IsHTML(true);
    $mail->Subject = "Career Enquiry";
    $mail->Body = 'Client Enquiry: <br>' .'Name ' . $_POST['name'] . '<br>Email: ' . $_POST['email'] . '<br>Phone Number: ' . $_POST['phone'] . '<br>Resume Link: ' . $_POST['resume'] . '<br>Refrence: ' . $_POST['ref'];
    // $mail->AltBody = $_POST['name'] . $_POST['email'] . $_POST['message'];

    $mail->send();
    echo "OK";
} catch (Exception $e) {
    echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}
?>
