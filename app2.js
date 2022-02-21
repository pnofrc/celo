$(window).load(function() {

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
        window.open("./blackhole/", "_self")
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


    let titles = document.querySelectorAll("#data a");
    // let descriptions = document.querySelectorAll("dd span");
    let titleFilm = document.querySelectorAll("dt");
    let pictures = document.querySelectorAll(".planet")

    // gifs
    let keyz = Object.keys(assets)
    for (let z = 0; z < pictures.length; z++) {
        pictures[z].style.backgroundImage = "url(" + assets[keyz[z + 1]]['picSteady'] + ")"
        pictures[z].title = keyz[z];
        pictures[z].addEventListener("mouseover", event => {
            pictures[z].style.backgroundImage = "url(" + assets[keyz[z + 1]]['pic'] + ")"
        });
        pictures[z].addEventListener("mouseout", event => {
            pictures[z].style.backgroundImage = "url(" + assets[keyz[z + 1]]['picSteady'] + ")"
        });
    }



    let x = 0



    Object.keys(assets).forEach(key => {
        titles[x].innerHTML = assets[key]['title'];
        titles[x].title = key
            // titles[x].addEventListener("mouseover", event => {
            //     console.log(`#${key} .planet`)
            //         // document.querySelector(`#${key} .planet`).style.backgroundImage = "url(" + assets[keyz[z + 1]]['pic'] + ")"
            // });
            // titles[x].addEventListener("mouseout", event => {
            //     // document.querySelector(`#${key} .planet`).style.backgroundImage = "url(" + assets[keyz[z + 1]]['pic'] + ")"
            // });
        titleFilm[x].innerHTML = assets[key]['title'];

        x++
    });

    // Bio
    let sun = document.querySelector("#sun dt")
    sun.innerHTML = assets['Bio']['bio']


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

    // document.querySelectorAll('#data a').forEach(element => {
    //     let tit = element.title

    //     element.addEventListener("mouseover", event => {
    //         pictures[z].style.backgroundImage = "url(" + assets[keyz[z + 1]]['pic'] + ")"
    //     });
    //     element.addEventListener("mouseout", event => {
    //         pictures[z].style.backgroundImage = "url(" + assets[keyz[z + 1]]['picSteady'] + ")"
    //     });
    // });


    $("#data a").click(function(e) {

        var ref = $(this).attr("class");
        var current = this.title

        if (this.classList[1] == 'active') {
            document.querySelector("iframe").src = assets[current]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);

            stopAnimation()
                // $(ref).css('background-image', `url(${assets[this.title]['picSteady']})`)
            $(`#${ref} .planet`).css('background-image', `url(${assets[this.title]['picSteady']})`)


        } else {
            solarsys.removeClass().addClass(ref);
            $(`.planet`).css('background-image', `url(${assets[this.title]['picSteady']})`)

            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');

            $(`#${ref} .planet`).css('background-image', `url(${assets[this.title]['pic']})`)

        }
        e.preventDefault();
    });



    $(".orbit").click(function(e) {
        var ref = $(this).attr("id");
        var current = this.title
        console.log(current)
        if (document.getElementsByClassName(ref)[0].classList[1] == 'active') {
            document.querySelector("iframe").src = assets[current]['link'];
            $("#player").fadeIn()
            $("#antiplayer").fadeIn()

            let stateObj = { id: current };
            window.history.replaceState(stateObj,
                current, "#" + current);
            $(`#${ref} .planet`).css('background-image', `url(${assets[current]['picSteady']})`)

            stopAnimation()

        } else {
            $("#data a").removeClass('active')
            console.log(current)
            $(`#${ref}`).css('background-image', `url(${assets[current]['picSteady']})`)
            solarsys.removeClass().addClass(ref);
            document.getElementsByClassName(ref)[0].classList.add('active')
            $(`#${ref} .planet`).css('background-image', `url(${assets[current]['pic']})`)
        }
        e.preventDefault();
    });

    $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });

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
            stopAnimation()
        } else {
            $("#animationResp").fadeOut()
            startAnimtion()
        }
    })

    $("#wait").fadeOut(2000)
});