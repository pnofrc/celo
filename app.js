$(window).load(function() {
    $("#blackhole img").delay(3000).fadeIn(3000)
    $("#comet img").delay(3000).fadeIn(3000)

    let titles = document.querySelectorAll("#data a");

    titles.forEach(el => {
        let currentTit = el.title;
        el.innerHTML = assets[currentTit][0]
    });


    let descriptions = document.querySelectorAll("dd span");

    descriptions.forEach(des => {
        let currentTit = des.title;
        des.innerHTML = assets[currentTit][2]
    });

    document.getElementById("antiplayer").addEventListener("click", function() {

        // document.getElementById("closePlayer").addEventListener('click', function() {
        $("#player").fadeOut()
        $("#antiplayer").fadeOut()
        document.querySelector("iframe").src = '';

        document.getAnimations().forEach(
            function(animation) {
                animation.playbackRate = 1;
            }
        );
    })


    document.getElementById("closePlayer").addEventListener('click', function() {
        $("#player").fadeOut()
        $("#antiplayer").fadeOut()
        document.querySelector("iframe").src = '';


        document.getAnimations().forEach(
            function(animation) {
                animation.playbackRate = 1;
            }
        );
    })

    document.getElementById("blackhole").addEventListener("click", function() {
        alert("Tutti gli altri video qua")
    })


    document.querySelector('#sun').addEventListener('click', function() {
        window.open("https://www.instagram.com/celo", "_blank")
    })

    var body = $("body"),
        // universe = $("#universe"),
        solarsys = $("#solar-system");


    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(1000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    // var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        var current = document.getElementsByClassName(ref)[0].title
        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            document.querySelector("iframe").src = assets[current][1];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()
            document.getAnimations().forEach(
                function(animation) {
                    animation.playbackRate = 0;
                });
        } else {
            solarsys.removeClass().addClass(ref);
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
        }
        e.preventDefault();
    });

    $(".orbit").click(function(e) {
        var ref = $(this).attr("id");
        var current = document.getElementsByClassName(ref)[0].title
        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            document.querySelector("iframe").src = assets[current][1];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()
            document.getAnimations().forEach(
                function(animation) {
                    animation.playbackRate = 0;
                });
        } else {
            $("#data a").removeClass('active')
            solarsys.removeClass().addClass(ref);
            document.getElementsByClassName(ref)[0].classList.add('active')
        }
        e.preventDefault();
    });

    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    init();
});