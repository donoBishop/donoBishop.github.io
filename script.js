window.onscroll = function() {stickyTopBar()};

var topBar = document.getElementById("top-bar");
var sticky = topBar.offsetTop;

function stickyTopBar() {
  if (window.pageYOffset >= sticky) {
    topBar.classList.add("sticky");
  } else {
    topBar.classList.remove("sticky");
  }
}