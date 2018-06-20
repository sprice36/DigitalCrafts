
var NAV_SEL = "[data-nav-item]";
var IMG_SEL = "[data-target]";
var BLK_IMG = "[data-target-new]";

var navItems = document.querySelectorAll(NAV_SEL);
var imgTarget = document.querySelectorAll(IMG_SEL);
var blankImg = document.querySelector(BLK_IMG);

imgTarget.forEach(function (nav){
   nav.addEventListener("click", function(event){
    event.preventDefault();
    blankImg.setAttribute('src', nav.getAttribute('src'));
    blankImg.classList.toggle("imgZoomContent");
    blankImg.classList.toggle("hidden"); 
    })
});
