var devbuild = document.getElementById("devbuild");
const urlParams = new URLSearchParams(window.location.search);

if (window.location.origin == 'nikeedev.github.io' && window.location.search == '') {
    window.location = window.location.origin + '/args-js/?load=prdct'
}
if (window.location.search === '') {
    window.location = window.location.href + '?load=prdct'
}



document.querySelector("html").style = "background-color: rgb(236, 236, 236);";



if (window.location.search.indexOf("load") !== -1) {
    if (urlParams.get("load") == "devlpr" || urlParams.get("load") == "dev") {
        document.title = "Development test";
        devbuild.innerHTML = "Development Build"
        document.getElementById("box").style = "top:0; bottom: 0; left: 0; right: 0; margin: auto; border-radius: 10px; height: 50px; width: 50px; background-color: blue; position: absolute; animation-name: frem-og-tilbake; animation-duration: 5.5s; animation-iteration-count: infinite; animation-direction: normal;";
    } else if (urlParams.get("load") == "prdct"){
        document.title = "Production test";
        devbuild.innerHTML = "Production Build"
        
        document.getElementById("box").style = "top:45%; right: 45%; margin: auto; font-family: Arial; font-size: 15px; position: absolute;";
        document.getElementById("box").innerHTML = "Nothing to see here";
    } else {
        document.title = "Unknown test";
        devbuild.innerHTML = "Unknown (Un-safe) Build"

        document.getElementById("box").style = "bottom: 45%; left: 45%; margin: auto; font-family: Arial; font-size: 15px; position: absolute;";
        document.getElementById("box").innerHTML = "Nothing to see here";
        
    }
} else if (window.location.search.indexOf("safe") !== -1) {
    document.title = "Safe test";

    document.querySelector("html").style = "background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);";
    devbuild.innerHTML = "Safe Mode Build";

    document.getElementById("box").style = "color: rgb(255, 122.5, 0); bottom: 45%; left: 45%; margin: auto; font-family: Arial; font-size: 15px; position: absolute;";
    document.getElementById("box").innerHTML = "::: Safe Mode Activated :::";
        
} else {
    document.title = "Unknown test";
        devbuild.innerHTML = "Unknown (Un-safe) Build"

        document.getElementById("box").style = "bottom: 45%; left: 45%; margin: auto; font-family: Arial; font-size: 15px; position: absolute;";
        document.getElementById("box").innerHTML = "Nothing to see here";
        
}



