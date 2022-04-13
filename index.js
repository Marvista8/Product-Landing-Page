function myTopnav() {
    let topnav = document.getElementById("nav-bar");
    if (topnav.className === "Topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "Topnav";
    }
}

let videoOpacity = () => {
 let videoShade = document.getElementById('video').style.backgroundColor = 'rgba(0,0,0,0.8)';
 console.log('videoShade: ', videoShade);
};

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}