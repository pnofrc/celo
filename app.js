// Stop animations cazzo
// rotazione orbite
// assets
// bio
// mobile gifs



$(window).load(function() {


    function stopAnimation() {
        document.getElementById("universe").getAnimations().forEach(
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




    let hash = $(location).attr('hash').split('#').pop();

    if (hash) {
        // document.getElementById("textSrc").innerHTML = assets[hash]['bio'];

        if (assets[hash]['bio']) {
            console.log("cd")
            document.getElementById("textSrc").innerHTML = assets[hash]['bio'];
            $("#player").css("display", "block")

            $("#textSrc").css("display", "block")
            $("iframe").css("display", "none")
            $("#data").css("display", "none")

            document.body.style.setProperty('--playerOn', 'rgba(0,0,0,0.8');

        } else {
            document.querySelector("iframe").src = assets[hash]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()
        }
        closeBackground()
        setTimeout(function() {
            stopAnimation()
        }, 3000)
    }




    $("#blackhole img").delay(2000).fadeIn(3000)
    $("#comet img").delay(2000).fadeIn(3000)






    document.getElementById("blackhole").addEventListener("click", function() {
        window.open("./blackhole/", "_self")
    })


    // document.querySelector('#sun').addEventListener('click', function() {
    //     // var ref = $(this).attr("class");
    //     // var current = this.title
    //     solarsys.removeClass().addClass('sun');
    //     gifs()
    //     $(".planet").parent().find('a').removeClass('active');
    //     $('.sunistainsta').addClass('active');

    //     // $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[this.title]['pic']})`)


    //     //     window.open("https://www.instagram.com/marco.celotti", "_blank")
    //     console.log('sun')
    // })





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


    let titles = document.querySelectorAll("#data a");
    let titleFilm = document.querySelectorAll("dt");
    let pictures = document.querySelectorAll(".planet")

    // gifs
    function gifs() {
        let keyz = Object.keys(assets)

        for (let z = 0; z < pictures.length; z++) {
            pictures[z].title = keyz[z + 1];
            pictures[z].style.backgroundImage = "url(assets/still/" + assets[keyz[z + 1]]['picSteady'] + ")"
        }
    }

    let keyz = Object.keys(assets)
    for (let z = 0; z < pictures.length; z++) {

        pictures[z].title = keyz[z + 1];

        pictures[z].style.backgroundImage = "url(assets/still/" + assets[keyz[z + 1]]['picSteady'] + ")"

        pictures[z].addEventListener("mouseover", event => {
            // console.log(assets[keyz[z + 1]]['pic'])

            for (let zz = 0; zz < pictures.length; zz++) {
                pictures[zz].style.backgroundImage = "url(assets/still/(" + assets[keyz[zz + 1]]['picSteady'] + ")"
                    // console.log(pictures[zz])
            }
            pictures[z].style.backgroundImage = "url(assets/gif/" + assets[keyz[z + 1]]['pic'] + ")"
        });
        pictures[z].addEventListener("mouseout", event => {
            // console.log(assets[keyz[z + 1]]['picSteady'])
            pictures[z].style.backgroundImage = "url(assets/still/(" + assets[keyz[z + 1]]['picSteady'] + ")"
        });
    }


    // Contents
    let x = 0

    Object.keys(assets).forEach(key => {
        titles[x].innerHTML = assets[key]['title'];
        titles[x].title = key
        titleFilm[x].innerHTML = assets[key]['title'];
        x++
    });

    // Bio
    let sun = document.querySelector("#sun dt")
    sun.innerHTML = assets['Bio']['title']




    function cleanURL() {
        document.querySelector("iframe").src = '';
        let stateObj = { id: 'home' };
        window.history.replaceState(stateObj,
            '', "/");
    }

    function closePlayer() {
        document.body.style.setProperty('--playerOn', 'rgba(0,0,0,0.3');

        $("#galaxy").fadeIn()

        $("iframe").css("display", "block")
        $("#player").fadeOut()
        $("#antiplayer").fadeOut()
        document.querySelector("iframe").src = '';
        document.getElementById("textSrc").innerHTML = '';
        cleanURL()
        startAnimtion()
        $("#textSrc").css("display", "none")

        // $("#galaxy").fadeIn()
        $("#hello").fadeIn()
        $("#data").css("display", "block")

    }

    if (document.getElementById("player"))



        document.getElementById("closePlayer").addEventListener('click', function() {
        closePlayer()
    })

    // document.getElementById("antiplayer").addEventListener("click", function() {
    //     closePlayer()
    // })


    function closeBackground() {
        $("#galaxy").css("display", "none")
        $("#hello").css("display", "none")
        $("#data").css("display", "none")
    }


    $("#data a").click(function(e) {

        var ref = $(this).attr("class");
        var current = this.title

        if (this.classList[1] == 'active') {
            if (assets[current]['bio']) {
                document.getElementById("textSrc").innerHTML = assets[current]['bio'];
                $("iframe").css("display", "none")
                $("#textSrc").css("display", "block")

                // document.getElementById("antiplayer").style.setProperty('background-color', 'var(--background)');


            } else {
                document.querySelector("iframe").src = assets[current]['link'];
            }
            $("#player").fadeIn()
                // $("#antiplayer").fadeIn()

            closeBackground()



            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            stopAnimation()

            $(`#${ref} .planet`).css('background-image', `url(assets/still/${assets[this.title]['picSteady']})`)


        } else {
            solarsys.removeClass().addClass(ref);
            gifs()
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');

            $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[this.title]['pic']})`)


        }
        e.preventDefault();
    });


    $("#sun").click(function(e) {
        var ref = $(this).attr("id");

        let key = "Bio"
        var current = key

        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            if (assets[current]['bio']) {
                document.getElementById("textSrc").innerHTML = assets[current]['bio'];
                $("iframe").css("display", "none")
                    // document.getElementById("antiplayer").style.setProperty('background-color', 'var(--background)');
                $("#textSrc").css("display", "block")


            } else {
                document.querySelector("iframe").src = assets[current]['link'];
            }

            $("#player").fadeIn()
                // $("#antiplayer").fadeIn()

            stopAnimation()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            closeBackground()

        } else {

            gifs()
                // stopAnimation()
                // console.log(current)

            solarsys.removeClass().addClass(ref);
            $("#data a").removeClass('active')
            document.getElementsByClassName(ref)[0].classList.add('active')


            $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[key]['pic']})`)

        }
        e.preventDefault();
    })
    $(".orbit").click(function(e) {
        // console.log('ao')
        var ref = $(this).attr("id");

        let key = this.querySelector(".planet").title
        var current = key

        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            // if (assets[current]['bio']) {
            //     document.getElementById("textSrc").innerHTML = assets[current]['bio'];
            //     $("iframe").css("display", "none")
            //     document.getElementById("antiplayer").style.setProperty('background-color', 'var(--background)');

            // } else {
            document.querySelector("iframe").src = assets[current]['link'];
            // }

            $("#player").fadeIn()
                // $("#antiplayer").fadeIn()

            stopAnimation()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            closeBackground()

        } else {

            gifs()
                // stopAnimation()
                // console.log(current)

            solarsys.removeClass().addClass(ref);
            $("#data a").removeClass('active')
            document.getElementsByClassName(ref)[0].classList.add('active')


            $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[key]['pic']})`)

        }
        e.preventDefault();
    });

    // $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });

    init();


    // RESPONSIVeNESS


    let y = 0
    if (window.innerHeight > window.innerWidth) {
        $("#animationResp").fadeIn()

        setTimeout(function() {
            stopAnimation()
        }, 5000)
    }


    window.addEventListener('resize', function() {
        if (window.innerHeight > window.innerWidth) {
            $("#animationResp").fadeIn()
                // stopAnimation()
        } else {
            $("#animationResp").fadeOut()
                // startAnimtion()
        }
    })

    $("#wait").fadeOut(2000)

});