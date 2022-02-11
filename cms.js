var assets = [
    [
        ['Manuel Ritz'],
        ['https://player.vimeo.com/video/352223101'],
        ['Tutto sommato è un bel film']
    ],
    [
        ['Simona Corsellini'],
        ['https://player.vimeo.com/video/400114006'],
        ['description']
    ],
    [
        ['Roger Vivier'],
        ['https://player.vimeo.com/video/481229528'],
        ['description']
    ],
    [
        ['Coltorti'],
        ['https://player.vimeo.com/video/352222024'],
        ['description']
    ],
    [
        ['Department Five SS21'],
        ['https://player.vimeo.com/video/535528039'],
        ['description']
    ],
    [
        ['Nike/Yoox'],
        ['https://player.vimeo.com/video/496674956'],
        ['description']
    ],
    [
        ['Womsh'],
        ['https://player.vimeo.com/video/569872956'],
        ['description']
    ],
    [
        ['Womsh2'],
        ['https://player.vimeo.com/video/669113967?h=029ed1d7b4'],
        ['description']
    ],
    [
        ['Bio'],
        ['https://player.vimeo.com/video/669113967?h=029ed1d7b4'],
        ['description']
    ]
]

let titles = document.querySelectorAll("#data a");
titles.forEach(el => {
    let currentTit = el.title;
    // console.log(currentTit)
    el.innerHTML = assets[currentTit][0]
    console.log()

});


let array = document.querySelectorAll(".planet");
array.forEach(element => {
    element.addEventListener("click", function() {

        let current = element.title;
        document.querySelector("iframe").src = assets[current][1];
        $("#player").fadeIn()
        $("#antiplayer").fadeIn()

        document.getAnimations().forEach(
            function(animation) {
                animation.playbackRate = 0;
            });

    })
});

document.getElementById("antiplayer").addEventListener("click", function() {
    console.log('hb n')

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