let toggle = document.getElementById("toggle-controls");
let store = localStorage.length

if (store === 0) {
    localStorage.setItem('theme', 'dark')
    toggle.innerHTML = "&#8594; Light"
    dark()
} else if (localStorage.getItem('theme') == 'dark') {
    dark()
} else if (localStorage.getItem('theme') == 'light') {
    light()
}

toggle.addEventListener("click", function() {
    checkTheme()
})

function light() {
    document.body.style.setProperty('--background', 'white');
    document.body.style.setProperty('--orbits', 'rgb(255,136,0)');
    document.body.style.setProperty('--selectedOrbit', 'rgb(255,0,0)');
    document.body.style.setProperty('--sun', 'rgb(255,255,0)');
    document.body.style.setProperty('--toggle', 'black');
    document.body.style.setProperty('--shadow', 'rgba(0,0,0, 0.514)');
    document.body.style.setProperty(' --playerOn', 'rgba(0,0,0, 0.3)');
    document.body.style.setProperty('--invert', '1');
    document.body.style.setProperty('--invert2', '0');

    document.body.style.setProperty('--shadowSun', 'rgba(255, 160, 60, 0.85)');

    localStorage.setItem('theme', 'light')
    console.log("light mode")
    document.getElementById("toggle-controls").innerHTML = "&#8594; Dark"
}

function dark() {
    document.body.style.setProperty('--background', 'black');
    document.body.style.setProperty('--orbits', 'white');
    document.body.style.setProperty('--selectedOrbit', 'violet');
    document.body.style.setProperty('--sun', 'magenta');
    document.body.style.setProperty('--toggle', 'white');
    document.body.style.setProperty('--shadow', 'rgba(255,255,255, 0.514)');
    document.body.style.setProperty(' --playerOn', 'rgba(255,255,255, 0.3)');
    document.body.style.setProperty('--invert', '0');
    document.body.style.setProperty('--invert2', '1');

    document.body.style.setProperty('--shadowSun', 'rgba(252, 60, 255, 0.85)');
    document.getElementById("toggle-controls").innerHTML = "&#8594; Light"


    localStorage.setItem('theme', 'dark')
    console.log("dark mode")
}




function checkTheme() {

    if (localStorage.getItem('theme') == 'light') {
        dark()


    } else {
        light()

    }

}


// $("#toggle-controls").click(function(e) {
//     checkTheme()
//         // body.toggleClass("controls-open controls-close");
//         // e.preventDefault();
// });