window.onload = function what() {
  var y = Math.floor(Math.random() * 10 + 1);
  var guess = 1;
  var numberOfGuesses = document.getElementById("num-of-guess").innerText;
  document.getElementById("submitguess").onclick = function () {
    var x = document.getElementById("guessField").value;
    if (x == y) {
      document.getElementById("mid-box1").style.display = "none";
      document.getElementById("mid-box2").style.display = "block";
      document.getElementById("rem-guess").style.display = "none";
      document.getElementById("play-again").style.display = "block";
    } else if (x > y) {
      guess++;
      numberOfGuesses = numberOfGuesses - 1;
      alert("OOPS SORRY!! TRY A SMALLER NUMBER");
      document.getElementById("num-of-guess").innerText = numberOfGuesses;
      document.getElementById("tries").innerText = guess;

      if (numberOfGuesses < 1) {
        document.getElementById("rem-guess").style.display = "none";
        document.getElementById("play-again").style.display = "block";
      }
    } else {
      guess++;
      numberOfGuesses = numberOfGuesses - 1;
      alert("OOPS SORRY!! TRY A GREATER NUMBER");
      document.getElementById("num-of-guess").innerText = numberOfGuesses;
      document.getElementById("tries").innerText = guess;
      if (numberOfGuesses < 1) {
        document.getElementById("rem-guess").style.display = "none";
        document.getElementById("play-again").style.display = "block";
        document.getElementById("mid-box1").style.display = "none";
        document.getElementById("mid-box3").style.display = "block";
      }
    }
    document.getElementById("yes").onclick = function () {
      location.reload();
    };
    document.getElementById("no").onclick = function () {
      window.location.replace("../pages/playgame_page.html");
    };
  };
};
