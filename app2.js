$(window).load(function() {



    // $("#playerSrc").on("load", function() {
    //     let head = $("#playerSrc").contents().find("head");
    //     let css = '<style>.headers{display:none}</style>';
    //     $(head).append(css);
    // });

    // let myiFrame = document.getElementById("playerSrc");
    // let doc = myiFrame.contentDocument;
    // doc.body.innerHTML = doc.body.innerHTML + '<style>.headers{display:none}</style>';



    let hash = $(location).attr('hash').split('#').pop();

    if (hash) {
        document.querySelector("iframe").src = assets[hash]['link'];
        $("#player").fadeIn()
        $("#antiplayer").fadeIn()

        setTimeout(function() {
            stopAnimation()
        }, 3000)
    }

    $("#blackhole img").delay(2000).fadeIn(3000)
    $("#comet img").delay(2000).fadeIn(3000)



    document.getElementById("blackhole").addEventListener("click", function() {
        alert("Tutti gli altri video qua")
    })


    document.querySelector('#sun').addEventListener('click', function() {
        window.open("https://www.instagram.com/marco.celotti", "_blank")
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


    let titles = document.querySelectorAll("#data a");
    let descriptions = document.querySelectorAll("dd span");
    let titleFilm = document.querySelectorAll("dt");

    let x = 0

    Object.keys(assets).forEach(key => {

        titles[x].innerHTML = assets[key]['title'];
        descriptions[x].innerHTML = assets[key]['description'];
        titles[x].title = key
        descriptions[x].title = key

        titleFilm[x].innerHTML = assets[key]['title'];
        // planets[x].title = key
        x++
    });


    function stopAnimation() {
        document.getAnimations().forEach(
            function(animation) {
                animation.playbackRate = 0;
            });
    }

    function startAnimtion() {
        document.getAnimations().forEach(
            function(animation) {
                animation.playbackRate = 1;
            });
    }

    function cleanURL() {
        document.querySelector("iframe").src = '';
        let stateObj = { id: 'home' };
        window.history.replaceState(stateObj,
            '', "/");
    }

    function closePlayer() {
        $("#player").fadeOut()
        $("#antiplayer").fadeOut()
        document.querySelector("iframe").src = '';
        cleanURL()
        startAnimtion()
    }

    document.getElementById("closePlayer").addEventListener('click', function() {
        closePlayer()
    })

    document.getElementById("antiplayer").addEventListener("click", function() {
        closePlayer()
    })

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        var current = document.getElementsByClassName(ref)[0].title

        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            document.querySelector("iframe").src = assets[current]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            stopAnimation()
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
            document.querySelector("iframe").src = assets[current]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            stopAnimation()

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