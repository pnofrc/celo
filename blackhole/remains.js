$(window).load(function() {
    function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;

        var requestFullScreen =
            docEl.requestFullscreen ||
            docEl.mozRequestFullScreen ||
            docEl.webkitRequestFullScreen ||
            docEl.msRequestFullscreen;
        var cancelFullScreen =
            doc.exitFullscreen ||
            doc.mozCancelFullScreen ||
            doc.webkitExitFullscreen ||
            doc.msExitFullscreen;

        if (!doc.fullscreenElement &&
            !doc.mozFullScreenElement &&
            !doc.webkitFullscreenElement &&
            !doc.msFullscreenElement
        ) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    }

    document.getElementById("toggle-fullscreen").addEventListener("click", event => {
        toggleFullScreen()
    })

    const app = new PIXI.Application({
        // pixiWasLoaded: true,
        transparent: true,
        width: innerWidth,
        height: innerHeight
    });



    document.body.appendChild(app.view);


    // holder to store the aliens
    const aliens = [];


    const icons = [
        ['../assets/remains/COWBOY.png', '349877850', 'COWBOY'],
        ['../assets/remains/OTTO.png', '427459417', 'OTTO'],
        ['../assets/remains/ALICE.png', '352222024', 'ALICE'],
        ['../assets/remains/BOTTEGAVENETA.png', '419631146', 'BOTTEGA VENETA'],
        ['../assets/remains/OFFICINECREATIVE.png', '393895615', 'OFFICINE CREATIVE'],
        ['../assets/remains/DEPFIVE.png', '368924668', 'DEPFIVE'],
        ['../assets/remains/COLTORTI.png', '481225660', 'COLTORTI'],
        ['../assets/remains/GEB.png', '378528305', 'GEB'],
        ['../assets/remains/GEBsummer.png', '393900471', 'GEB Summer'],
        ['../assets/remains/MEZULIC.png', '384494837', 'MEZULIC'],
        ['../assets/remains/FF.png', '400112511', 'FF'],
        ['../assets/remains/EAST.png', '364005329', 'EAST'],
    ]


    icons.forEach(function(icon) {

        // create a new Sprite that uses the image name that we just generated as its source

        // const dude = new PIXI.AnimatedSprite(textureArray);
        const dude = PIXI.Sprite.from(icon[0]);


        // set a random scale for the dude - no point them all being the same size!
        dude.scale.set((innerHeight / 7000) + Math.random() * (innerHeight / 4800));
        // dude.scale.set(innerHeight / 1500);

        // finally lets set the dude to be at a random positionmedia
        dude.x = Math.random() * app.screen.width;
        dude.y = Math.random() * (app.screen.height - 200);

        // dude.tint = 0xFF00FF;

        // create some extra properties that will control movement :
        // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
        // dude.direction = Math.random() * Math.PI * 2;
        dude.direction = Math.random() * Math.random() * Math.PI;

        // this number will be used to modify the direction of the dude over time
        // dude.turningSpeed = Math.random() ;
        dude.turningSpeed = 0.1;

        // create a random speed for the dude between 2 - 4
        // dude.speed = 1 + Math.random();
        dude.speed = .2;

        // Opt-in to interactivity
        dude.interactive = true;

        // Shows hand cursor
        dude.buttonMode = true;

        // Pointers normalize touch and mouse
        dude.on('pointerdown', onClick);


        // finally we push the dude into the aliens array so it it can be easily accessed later
        aliens.push(dude);

        //var SAFARIMERDA = icons[i][1];



        function onClick() {

            document.querySelector("iframe").src = "https://player.vimeo.com/video/" + icon[1] + "?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0";
            $("#player").fadeIn()
                // $("canvas").fadeOut()
                // $("canvas").fadeIn()
            $("canvas").css("opacity", "0.3")

            $("#antiplayer").fadeIn()
            $("#closePlayerBlack").fadeIn()
            dude.speed = 0
            app.ticker.stop()
            $("#hello").fadeOut()
            $("#player p").append(icon[2])
            document.getElementById("closePlayerBlack").addEventListener("click", function() {
                $("#player").fadeOut()
                $("#antiplayer").fadeOut()
                document.querySelector("iframe").src = ' ';
                dude.speed = 1
                let avoid = document.getElementById("player")["innerText"].toString();
                console.log(avoid)
                $("#player p").each(function() {
                    //highlight_words('going', this);
                    var text = $(this).text();
                    text = text.replace(text, "");
                    $(this).html(text);
                });
                $("canvas").css("opacity", "1")
                $("#hello").fadeIn()
                app.ticker.start()

            })

            //window.open(this.SAFARIMERDA,"_self");
            // window.open(icon[1], "_self");
            //dude.scale.x *= 1.25;
            //dude.scale.y *= 1.25;
        }




        app.stage.addChild(dude);
    });

    // create a bounding box for the little dudes
    const dudeBoundsPadding = 1;
    const dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding, -dudeBoundsPadding,
        app.screen.width + dudeBoundsPadding,
        app.screen.height + dudeBoundsPadding);


    app.ticker.add(() => {


        // console.log(app.ticker.lastTime)
        if (app.ticker.lastTime > 50000 && app.ticker.lastTime < 50100) {
            $("canvas").fadeOut(1000)
            setTimeout(function() {
                app.ticker.stop()
                location.reload()

            }, 1000)
        }
        // iterate through the dudes and update their position
        for (let i = 0; i < aliens.length; i++) {
            const dude = aliens[i];
            dude.direction += dude.turningSpeed / 500;
            dude.x += Math.sin(dude.direction) * dude.direction;
            dude.y += Math.cos(dude.direction) * dude.speed * Math.random();
            dude.rotation = dude.direction - Math.PI * Math.random() * 0.003;


            // wrap the dudes by testing their boundsmedia.
            if (dude.x < dudeBounds.x) {
                dude.x += dudeBounds.width;
            } else if (dude.x > dudeBounds.x + dudeBounds.width) {
                dude.x -= dudeBounds.width;
            }
        }
    });



    $("canvas").css("display", "none")
    $("canvas").fadeIn(1000)
})