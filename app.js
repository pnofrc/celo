$(window).load(function() {
    var body = $("body"),
        solarsys = $("#solar-system");

    let titles = document.querySelectorAll("#data a");
    let titleFilm = document.querySelectorAll("dt");
    let pictures = document.querySelectorAll(".planet")

    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(1000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    function closeBackground() {
        $("#universe").css("display", "none")
        $("#hello").css("display", "none")
        $("#data").css("display", "none")
    }

    // Check if there is an anchor link in the URL
    let hash = $(location).attr('hash').split('#').pop();


    if (hash) {
        if (assets[hash]['bio']) { // If it's the Bio...
            document.getElementById("textSrc").innerHTML = assets[hash]['bio'];

            $("#player").css("display", "block")
            $("#textSrc").css("display", "block")
            $("iframe").css("display", "none")
            $("#data").css("display", "none")

            document.body.style.setProperty('--playerOn', 'rgba(0,0,0,0.8');

        } else { // or a video...
            document.querySelector("iframe").src = assets[hash]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()
        }
        closeBackground() // no background, less computation
    } else { // Otherwise show...
        $("#blackhole img").delay(2000).fadeIn(3000)
        $("#comet img").delay(2000).fadeIn(3000)
    }


    // Link for other videos 
    document.getElementById("blackhole").addEventListener("click", function() {
        window.open("./blackhole/", "_self")
    })


    // Toggle menu film responsive
    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });


    // COMPILE FROM DICTIONARIES

    // reset gifs
    function gifs() {
        let keyz = Object.keys(assets)
        for (let z = 0; z < pictures.length; z++) {
            pictures[z].title = keyz[z + 1];
            pictures[z].style.backgroundImage = "url(assets/still/" + assets[keyz[z + 1]]['picSteady'] + ")"
        }
    }

    // change from steady to gif
    let keyz = Object.keys(assets)
    for (let z = 0; z < pictures.length; z++) {

        pictures[z].title = keyz[z + 1];

        pictures[z].style.backgroundImage = "url(assets/still/" + assets[keyz[z + 1]]['picSteady'] + ")"

        pictures[z].addEventListener("mouseover", event => {
            for (let zz = 0; zz < pictures.length; zz++) {
                pictures[zz].style.backgroundImage = "url(assets/still/" + assets[keyz[zz + 1]]['picSteady'] + ")"
            }
            pictures[z].style.backgroundImage = "url(assets/gif/" + assets[keyz[z + 1]]['pic'] + ")"
        });
        // pictures[z].addEventListener("mouseout", event => {

        // pictures[z].style.backgroundImage = ""

        // console.log(pictures[z].style.backgroundImage)

        // console.log(`url(assets/still/${assets[keyz[z + 1]]['picSteady']})`)
        // });
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

        $("#universe").fadeIn()

        $("iframe").css("display", "block")
        $("#player").fadeOut()
        $("#antiplayer").fadeOut()
        document.querySelector("iframe").src = '';
        document.getElementById("textSrc").innerHTML = '';
        cleanURL()
        $("#textSrc").css("display", "none")

        // $("#galaxy").fadeIn()
        $("#hello").fadeIn()
        $("#data").css("display", "block")

    }

    // button close player
    if (document.getElementById("player"))
        document.getElementById("closePlayer").addEventListener('click', function() {
            closePlayer()
        })

    // document.getElementById("antiplayer").addEventListener("click", function() {
    //     closePlayer()
    // })

    // var anim = document.querySelectorAll('.orbit');
    // document.getElementById('play_stop').onclick = function() {
    //     for (var i = 0; i < anim.length; i++) {
    //         console.log(anim[i])
    //         if (anim[i].style.animationPlayState == 'paused') {
    //             anim[i].style.animationPlayState = 'running';
    //         } else {
    //             anim[i].style.animationPlayState = 'paused';
    //         }
    //     }
    // }

    // var anim2 = document.querySelectorAll('.planet');
    // var anim3 = document.querySelectorAll('.planet');
    // document.getElementById('play_stop').onclick = function() {
    //     for (var i = 0; i < anim2.length; i++) {
    //         console.log(anim2[i])
    //         if (anim[i].style.animationPlayState == 'paused') {
    //             anim[i].style.animationPlayState = 'running';
    //         } else {
    //             anim[i].style.animationPlayState = 'paused';
    //         }
    //     }
    // }



    // When click on menu films..
    $("#data a").click(function(e) {

        var ref = $(this).attr("class");
        var current = this.title

        if (this.classList[1] == 'active') {
            if (assets[current]['bio']) {
                document.getElementById("textSrc").innerHTML = assets[current]['bio'];
                $("iframe").css("display", "none")
                $("#textSrc").css("display", "block")
            } else {
                document.querySelector("iframe").src = assets[current]['link'];
            }
            $("#player").fadeIn()
            closeBackground()


            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

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


    // When click on the orbit
    $(".orbit").click(function(e) {
        var ref = $(this).attr("id");

        let key = this.querySelector(".planet").title
        var current = key

        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {

            document.querySelector("iframe").src = assets[current]['link'];

            $("#player").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            closeBackground()

        } else {

            gifs()

            solarsys.removeClass().addClass(ref);
            $("#data a").removeClass('active')
            document.getElementsByClassName(ref)[0].classList.add('active')

            $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[key]['pic']})`)

        }
        e.preventDefault();
    });



    // When click on the sun (bio)
    $("#sun").click(function(e) {
        var ref = $(this).attr("id");

        let key = "Bio"
        var current = key

        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            if (assets[current]['bio']) {
                document.getElementById("textSrc").innerHTML = assets[current]['bio'];
                gifs()
                $("iframe").css("display", "none")
                $("#textSrc").css("display", "block")
            } else {
                document.querySelector("iframe").src = assets[current]['link'];
            }
            $("#player").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            closeBackground()

        } else {

            gifs()

            solarsys.removeClass().addClass(ref);
            $("#data a").removeClass('active')
            document.getElementsByClassName(ref)[0].classList.add('active')

            $(`#${ref} .planet`).css('background-image', `url(assets/gif/${assets[key]['pic']})`)

        }
        e.preventDefault();
    })

    init();

    // Responsive
    if (window.innerHeight > window.innerWidth) {
        $("#animationResp").fadeIn()
    }


    window.addEventListener('resize', function() {
        if (window.innerHeight > window.innerWidth) {
            $("#animationResp").fadeIn()

        } else {
            $("#animationResp").fadeOut()
            document.getElementById('fake').click();
        }
    })

    $("#wait").fadeOut(2000)

});