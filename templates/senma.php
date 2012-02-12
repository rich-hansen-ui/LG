<?php
$to = "concierge@lazyglamour.com";
$subject = "Contact Us Request";
$email = "webmaster@lazyglamour.com";
$message = $_REQUEST['FirstName']." ".$_REQUEST['LastName']." ".$_REQUEST['Email']."\n\n";
//Need to add in mailing list request.
// id is MailingList
$message .= "had some comments:\n";
$message .= $_REQUEST['Comments'] ;

if ($_REQUEST['MailingList'] == 'subscribe') {
    $message .= "\n\n Please subscribe me to your mailing list.";
}
$headers = "From: $email";
$sent = mail($to, $subject, $message, $headers) ;

header( 'Location: http://lazyglamour.com/Contact1.html' ) ;

?>