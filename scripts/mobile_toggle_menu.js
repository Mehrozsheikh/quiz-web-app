function openMenu() {
    var x = document.getElementById("mobile-nav");
    var y = document.getElementById("main-body");
    var z = document.getElementsByTagName("footer");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "flex";
      z[0].style = 'display: block;';
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z[0].style = 'display: none;';
    }
}