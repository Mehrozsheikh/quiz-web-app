<?php
$servername = "localhost";
$username = "root";
$dbpassword = "root";
$dbname = "quiz_db";

if (!empty($_POST['email']) && !empty($_POST['password'])) {

    $email = $_POST['email'];
    $password = $_POST['password'];

    if (strlen($password) < 6) {
        echo '<script type="text/javascript">
        alert("Password must be atleast 6 characters long");
        location="http://localhost/quizwebapp/pages/login_page.html";
        </script>';
    } else {
        // Create connection
        $conn = new mysqli($servername, $username, $dbpassword, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM users_data WHERE email = '{$email}' AND password = '{$password}'";
        $result = mysqli_query($conn, $sql) or die("Query Unsuccessful");

        if (mysqli_num_rows($result) > 0) {

            while ($row = mysqli_fetch_assoc($result)) {
                session_start();
                $_SESSION['email'] = $row['email'];
                $_SESSION['id'] = $row['id'];

                echo '<script type="text/javascript">
                alert("Login Successful");
                location="http://localhost/quizwebapp/";
                </script>';
            }
        } else {
            echo '<script type="text/javascript">
            alert("Invalid Credentials, Please try again");
            location="http://localhost/quizwebapp/pages/login_page.html";
            </script>';
        }
    }
    $conn->close();
}