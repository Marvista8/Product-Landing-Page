function myTopnav() {
    let topnav = document.getElementById("nav-bar");
    if (topnav.className === "Topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "Topnav";
    }
}
