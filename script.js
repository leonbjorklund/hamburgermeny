function expandHamburger () {
    let element = document.getElementById("expanding");
    element.classList.toggle("make-100vh");
    
    let hide = document.getElementsByClassName("about")[0].style.display = "inline-block";
    hide.classList.toggle("hide-about");
}
