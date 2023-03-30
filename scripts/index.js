//Update Date
const date = new Date();

document.getElementById("footer-copyright").innerHTML = "&copy; " + date.getFullYear() + " Bountiful Foods"
document.getElementById("last-modified").innerHTML = "Last Modified: " + date.toUTCString()



//Hamburger Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



//Social Media Icons
var image = document.querySelector('.instagram');

image.addEventListener("mouseover", function() {
  this.src = "/images/instagram-hover.png";
});

image.addEventListener("mouseout", function() {
  this.src = "/images/instagram.png";
});


