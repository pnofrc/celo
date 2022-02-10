if (localStorage.lenght === 0) {
    localStorage.setItem('theme') == 'light'
    document.getElementById("cometImg").classList.add('invert');
    document.getElementById("blackholeImg").classList.add('invert');
} else if (localStorage.getItem('theme') == 'dark') {
    document.body.style.setProperty('--background', 'black');
    document.body.style.setProperty('--orbits', 'rgb(123, 0, 255)');
    document.body.style.setProperty('--selectedOrbit', 'violet');
    document.body.style.setProperty('--sun', 'magenta');
    document.body.style.setProperty('--toggle', 'white');
    document.body.style.setProperty('--shadow', 'rgba(255, 255, 255, 0.514)');
    document.body.style.setProperty('--playerOn', 'rgba(255, 255, 255, 0.3)');

    document.body.style.setProperty('--invert', '0');
    localStorage.setItem('theme', 'dark')
    console.log("dark mode")

}


let toggle = document.getElementById("toggle");
toggle.addEventListener("click", function() {

    if (localStorage.getItem('theme') == 'light') {

        document.body.style.setProperty('--background', 'black');
        document.body.style.setProperty('--orbits', 'rgb(123, 0, 255)');
        document.body.style.setProperty('--selectedOrbit', 'violet');
        document.body.style.setProperty('--sun', 'magenta');
        document.body.style.setProperty('--toggle', 'white');
        document.body.style.setProperty('--shadow', 'rgba(255,255,255, 0.514)');
        document.body.style.setProperty(' --playerOn', 'rgba(255,255,255, 0.3)');
        document.body.style.setProperty('--invert', '0');



        localStorage.setItem('theme', 'dark')
        console.log("dark mode")

    } else {
        document.body.style.setProperty('--background', 'white');
        document.body.style.setProperty('--orbits', 'rgb(255,136,0)');
        document.body.style.setProperty('--selectedOrbit', 'rgb(255,0,0)');
        document.body.style.setProperty('--sun', 'rgb(255,255,0)');
        document.body.style.setProperty('--toggle', 'black');
        document.body.style.setProperty('--shadow', 'rgba(0,0,0, 0.514)');
        document.body.style.setProperty(' --playerOn', 'rgba(0,0,0, 0.3)');
        document.body.style.setProperty('--invert', '1');

        localStorage.setItem('theme', 'light')
        console.log("light mode")
    }
})