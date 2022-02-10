$(window).load(function() {

    // let saturn = document.getElementById("saturn");

    // saturn.addEventListener("click", function() {
    //     $("#player").fadeIn()
    //     $("#antiplayer").fadeIn()
    // })

    let array = document.querySelectorAll(".planet");
    console.log(array)

    array.forEach(element => {
        element.addEventListener("click", function() {
            // alert()
            document.querySelector("iframe").src = 'https://player.vimeo.com/video/669113967?h=029ed1d7b4'
            $("#player").fadeIn(2000)
            $("#antiplayer").fadeIn(2000)
        })
    });

    document.getElementById("closePlayer").addEventListener('click', function() {
        $("#player").fadeOut(1000)
        $("#antiplayer").fadeOut(1000)
            // document.getElementById("antiplayer").setProperty('--playerOn', 'transparent')
    })


    let blackHole = document.getElementById("blackhole");

    blackHole.addEventListener("click", function() {
        alert("Tutti gli altri video qua")
    })

    $("#blackhole img").delay(3000).fadeIn(3000)
    $("#comet img").delay(3000).fadeIn(3000)

    if (localStorage.lenght === 0) {
        localStorage.setItem('theme') == 'light'
    } else if (localStorage.getItem('theme') == 'dark') {
        document.body.style.setProperty('--background', 'black');
        document.body.style.setProperty('--orbits', 'rgb(123, 0, 255)');
        document.body.style.setProperty('--selectedOrbit', 'violet');
        document.body.style.setProperty('--sun', 'magenta');
        document.body.style.setProperty('--toggle', 'white');
        document.body.style.setProperty('--shadow', 'rgba(255, 255, 255, 0.514)');
        document.body.style.setProperty(' --playerOn', 'rgba(255, 255, 255, 0.3)');


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


            localStorage.setItem('theme', 'dark')
            console.log("dark mode")
                //document.body.style.setProperty('--active', '#YOURCOLOR');
                //document.body.style.setProperty('--controls', '#YOURCOLOR');
        } else {
            document.body.style.setProperty('--background', 'white');
            document.body.style.setProperty('--orbits', 'rgb(255,136,0)');
            document.body.style.setProperty('--selectedOrbit', 'rgb(255,0,0)');
            document.body.style.setProperty('--sun', 'rgb(255,255,0)');
            document.body.style.setProperty('--toggle', 'black');
            document.body.style.setProperty('--shadow', 'rgba(0,0,0, 0.514)');
            document.body.style.setProperty(' --playerOn', 'rgba(0,0,0, 0.3)');


            //document.body.style.setProperty('--active', '#YOURCOLOR');
            //document.body.style.setProperty('--controls', '#YOURCOLOR');
            localStorage.setItem('theme', 'light')
            console.log("light mode")
        }
    })





    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");


    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        // alert()
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
    $(".set-size").click(function() { setView("scale-s set-size"); });
    $(".set-distance").click(function() { setView("scale-d set-distance"); });

    init();

});