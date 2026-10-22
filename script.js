const hamOpen = document.getElementById("hamburger-menu");
const navContainer = document.getElementsByClassName("nav-items");
const hamClose = document.getElementById("close-ham");

hamOpen.addEventListener("click",function(){
    navContainer[0].style.display="flex";
    hamOpen.style.display="none";
    hamClose.style.display="block"
})

hamClose.addEventListener("click",function(){
    navContainer[0].style.display="none";
    hamOpen.style.display="block";
    hamClose.style.display="none"
})