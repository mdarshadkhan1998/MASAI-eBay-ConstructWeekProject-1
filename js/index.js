//Div-1
// start selling button 
document.querySelector("#startSelling").addEventListener("click", function(){
    window.location.href="page1.html";
})

document.querySelector("#logo").addEventListener("click", function(){
  window.location.href="";
})


// fix head code

window.onscroll = function() {myFunction()};

var header = document.getElementById("div1");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//==================================================================================================================================================================//
//div-2
//sliding images code
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds

}
document.querySelector("#prev").addEventListener("click", function(){
  showSlides()
  dots[i].className = "active"; 
})
document.querySelector("#next").addEventListener("click", function(){
  showSlides()
  dots[i].className = "active"; 
})
document.querySelector("#prevdot").addEventListener("click", function(){
  showSlides()
  dots[i].className = "active"; 
})
document.querySelector("#nextdot").addEventListener("click", function(){
  showSlides()
  dots[i].className = "active"; 
})

// ------------------------------------------------------------------
//program for manal sliding -----------------------------------------

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 
// ----------------------------------------------------------------------------------------


//When click on IMG-1 in sliding image it goes to registration page
document.querySelector("#imgSlid").addEventListener("click", function(){
    window.location.href="startSelling.html";
})
//When click on IMG-2 in sliding image it goes to registration page
document.querySelector("#imgSlid2").addEventListener("click", function(){
  window.location.href="startSelling.html";
})



//==================================================================================================================================================================//
//div-3




//==================================================================================================================================================================//
//div-4




//==================================================================================================================================================================//
//div-5




//==================================================================================================================================================================//
//div-6
// program for automatic sliding
var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var j;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (j = 0; j < dots1.length; j++) {
    dots1[j].className = dots1[j].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots1[slideIndex1-1].className += " active";
  setTimeout(showSlides1, 5000); // Change image every 5 seconds
}




//==================================================================================================================================================================//
//div-7




//==================================================================================================================================================================//
//div-8
document.querySelector("#viewMore").addEventListener("click", function(){
  window.location.href="viewMore.html";
})



//==================================================================================================================================================================//
//div-9

