<?php
session_start();
session_unset();
session_destroy();
echo '<script type="text/javascript">
alert("You have been logged out");
location="http://localhost/quizwebapp/";
</script>';
?>