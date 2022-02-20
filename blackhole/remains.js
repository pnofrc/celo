$(window).load(function() {

    // setTimeout(function() {
    //     $("canvas").fadeOut(1000)
    //     setTimeout(function() {
    //         location.reload()

    //     }, 1000)

    // }, 60000)


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
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],
        ['../circle.png', 'https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0', 'titleeee'],

    ]



    icons.forEach(function(icon) {

        // create a new Sprite that uses the image name that we just generated as its source

        // const dude = new PIXI.AnimatedSprite(textureArray);
        const dude = PIXI.Sprite.from(icon[0]);


        // set a random scale for the dude - no point them all being the same size!
        dude.scale.set((innerHeight / 3000) + Math.random() * (innerHeight / 1200));
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






        // function hover(element, enter, leave){
        //     , enter)
        //     element.addEventListener('mouseleave', leave)
        //   }

        // dude.on("mouseleave", function(event) {
        //     app.ticker.start()
        // });



        // finally we push the dude into the aliens array so it it can be easily accessed later
        aliens.push(dude);

        //var SAFARIMERDA = icons[i][1];



        function onClick() {

            document.querySelector("iframe").src = icon[1];
            $("#player").fadeIn()
                // $("canvas").fadeOut()
                // $("canvas").fadeIn()
            $("canvas").css("opacity", "0.3")

            $("#antiplayer").fadeIn()
            dude.speed = 0
            app.ticker.stop()
            $("#hello").fadeOut()
            $("#player p").append(icon[2])
            document.getElementById("closePlayer").addEventListener("click", function() {
                $("#player").fadeOut()
                $("#antiplayer").fadeOut()
                document.querySelector("iframe").src = '';
                dude.speed = 1
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
            dude.x += Math.sin(dude.direction) * dude.direction * Math.random();
            dude.y += Math.cos(dude.direction) * dude.speed * Math.random();
            dude.rotation = dude.direction - Math.PI * Math.random() * 0.0009;


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