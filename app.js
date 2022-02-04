$(window).load(function() {

    // var data = [

    // ]

    // data.forEach(film => {
    //     $("#data").innerHTML += `<a class="${}" title="${}" href="#${}speed"><i>Bio</i></a>`
    //     $("#solar-system").innerHTML += `

    //     <div id="${}" class="orbit">
    //     <div class="pos">
    //         <div class="planet">
    //             <dl class="infos">
    //                 <dt>${}</dt>
    //                 <dd><span></span></dd>
    //             </dl>
    //         </div>
    //     </div>
    // </div>
    // `

    // `#${} .pos {
    //     left: 0;
    //     top: 50%;
    // }`
    // });


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