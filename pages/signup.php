<?php
$servername = "localhost";
$username = "root";
$dbpassword = "root";
$dbname = "quizapp_db";

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm-password'];

    if ($password != $confirm_password || strlen($password) < 6) {
        echo '<script type="text/javascript">
        alert("Something went wrong! Please try again.");
        location="http://localhost/quizwebapp/pages/signup_page.html";
        </script>';
    } else {
        // Create connection
        $conn = new mysqli($servername, $username, $dbpassword, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO users_data (name, email, password) VALUES ('{$name}', '{$email}', '{$password}')";

        if ($conn->query($sql) === TRUE) {
            echo '<script type="text/javascript">
            alert("Registration successful! Login with same credentials.");
            location="http://localhost/quizwebapp/pages/login_page.html";
            </script>';
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
}