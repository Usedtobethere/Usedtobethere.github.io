toggle = document.querySelectorAll(".toggle")[0];
other = document.getElementsByClassName("other");
nav = document.querySelectorAll("nav")[0];
toggle_open_text = "Menu";
toggle_close_text = "Close";

toggle.addEventListener(
  "click",
  function () {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      toggle.innerHTML = toggle_close_text;
    } else {
      toggle.innerHTML = toggle_open_text;
    }
  },
  false
);
for (var i = 0; i < other.length; i++) {
  other[i].addEventListener(
    "click",
    function () {
      nav.classList.toggle("open");

      if (nav.classList.contains("open")) {
        toggle.innerHTML = toggle_close_text;
      } else {
        toggle.innerHTML = toggle_open_text;
      }
    },
    false
  );
}

setTimeout(function () {
  nav.classList.toggle("open");
}, 800);
