<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elite Quiz</title>
</head>

<body>
    <div class="logo">
        <img width="150px" src="../assets/images/logo.png" alt="logo" />
    </div>
    <div>
        <nav>
            <ul>
                <li class="nav-bar-list"><a class="nav-bar-item" href="../index.html">Home</a></li>
                <li class="nav-bar-list"><a class="nav-bar-item" href="leaderboard_page.html">Leaderboard</a>
                </li>
                <li class="nav-bar-list"><a class="nav-bar-item" href="playgame_page.html">Play Game</a></li>
                <li class="nav-bar-list"><a class="nav-bar-item" href="about_page.html">About</a></li>
                <div id="account-btn">
                    <li> <i class="fa fa-user-plus" style="font-size:18px; color: #F98367; padding-right: 10px;"></i>
                        <?php
                        session_start();
                        if (isset($_SESSION['email'])) {
                            echo '<a class=" nav-bar-item" href="logout.php">Logout</a>';
                        } else {
                            echo '<a class=" nav-bar-item" href="login_page.html">Login</a>';
                        }
                        ?>

                    </li>
                </div>
                <a href="javascript:void(0);" id="menu-btn" onclick="openMenu()">
                    <i class="fa fa-bars" style="font-size:22px; color: #F98367; padding-right: 10px;"></i>
                </a>
            </ul>
        </nav>
    </div>

</body>

</html>