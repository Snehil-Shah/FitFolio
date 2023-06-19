<?php

//Storing email & password from login form for auth
$email=$_POST["email"];
$password=$_POST["password"];

//Creating connection to fitfolio database
$conn= new mysqli("localhost","root","password","fitfolio");

//Checking connection
if($conn->connect_error){
die("connection failed:".$conn->connect_error);
}

//Fetching Data 
$sql = "SELECT Email, Pass FROM users";
$result = $conn->query($sql);

// Authorizing Entered credentials with Database entries
$trigger=0;
while($row = $result->fetch_assoc()) {
    if ($email==$row["Email"] && $password==$row["Pass"]){
        $trigger++;
        header('Location: ../HTML/home2.html');
        break;
    }
}
if ($trigger==0){
    $alert="henlo";
    // header( 'Location: ../HTML/home.html' );
    echo "sorry";
}

$conn->close();
  
?>

