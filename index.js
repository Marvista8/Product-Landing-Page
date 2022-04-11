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