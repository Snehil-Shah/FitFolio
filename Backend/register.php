<?php

//Storing credentials from registration form
$name=$_POST["name"];
$age=$_POST["age"];
$height=$_POST["height"];
$weight=$_POST["weight"];
$email=$_POST["email"];
$password=$_POST["password"];
$subscription=$_POST["subscription"];

//Creating connection to fitfolio database
$conn= new mysqli("localhost","root","password","fitfolio");

//Checking connection
if($conn->connect_error){
die("connection failed:".$conn->connect_error);
}

//Inserting Data
$sql = "INSERT INTO users VALUES('$email','$password','$name','$subscription',$age,$height,$weight);";

if ($conn->query($sql) === TRUE) {
    echo "Account created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
  
?>

