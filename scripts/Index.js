function revealFromLeft() {
    var reveals = document.querySelectorAll(".enable-animation-from-left");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animation-from-left");
      } else {
        reveals[i].classList.remove("animation-from-left");
      }
    }
  }
  
  window.addEventListener("scroll", revealFromLeft);

  function revealFromRight() {
    var reveals = document.querySelectorAll(".enable-animation-from-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 40;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animation-from-right");
      } else {
        reveals[i].classList.remove("animation-from-right");
      }
    }
  }
  
  window.addEventListener("scroll", revealFromRight);

  function revealAppearing() {
    var reveals = document.querySelectorAll(".enable-animation-appearing");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 40;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animation-appearing");
      } else {
        reveals[i].classList.remove("animation-appearing");
      }
    }
  }
  
  window.addEventListener("scroll", revealAppearing);