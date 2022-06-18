var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("ind");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  function myFunction(x) {
    if (x.matches) { 
      slides[slideIndex - 1].style.display = "block";
    } else {
      slides[slideIndex - 1].style.display = "flex";    }
  }
  
  var x = window.matchMedia("(max-width: 702px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}
