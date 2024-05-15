<?php

$username = $_POST["Username"];
$password = $_POST["Password"];


$host = "localhost";
$dbname = "accountinfo_db";
$user = "root";
$pass = "";


$conn = mysqli_connect($host, $user, $pass, $dbname);


if (mysqli_connect_errno()) {
    die("connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO account (username, password)
VALUES (?, ?)";

$stmt =  mysqli_stmt_init($conn);

if (! mysqli_stmt_prepare($stmt, $sql)){
    die(mysqli_error($conn));
}


mysqli_stmt_bind_param($stmt, "ss",
                       $username,
                       $password);


mysqli_stmt_execute($stmt);

echo"les goooo";



?>