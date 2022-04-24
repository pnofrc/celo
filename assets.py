import os
lista = [ "ManuelRitz", "SimonaCorsellini", "RogerVivier", "Coltorti", "DepartmentFiveSS21", "Nike-Yoox", "Womsh", "Airmax" ]
listaLink = [ "https://player.vimeo.com/video/352223101?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/400114006?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/481229528?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/352222024?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/535528039?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/496674956?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0&sidedock=0", "https://player.vimeo.com/video/569872956?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0", "https://player.vimeo.com/video/569872956?h=043c2aac46&title=0&byline=0&portrait=0&sidedock=0" ]
z = 0

for n in lista:
    owd = os.getcwd()
    os.mkdir(n)
    os.chdir(n)
    f = open("index.html", "w")
    f.write(f'''
    
    <!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MARCO CELOTTI PORTFOLIO</title>
    <meta property="og:image" content="http://www.marcocelotti.com/screen.jpg">

    <meta name="description" content={n}>
    <meta name="designer" content="Federico Poni || Funix">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" rel="preload" href="../style.css">
</head>

<body>
    <div id="navbar">

        <a id="toggle-data" id="data"><i class="icon-data"></i>Film</a>
        <a id="toggle-controls"><i class="icon-controls"></i></a>
        <!-- <a id="toggle-info"><span onclick="alert('Welcome! Click and double click the planets or the film menu!')">Info</span></a> -->
        <a id='toggle-fullscreen'>&#10023; Fullscreen</a>
    </div>
        <div id="player">
        <div id="closePlayer"><a href="../">&#8999;</a></div>
       <iframe id="playerSrc" src="{listaLink[z]}" frameborder="0" allow="fullscreen;" color="#0f0" allowfullscreen></iframe>
        <div id="textSrc"></div>
    </div>
    <script src="../jquery.min.jsm.js"></script>
    <script src="../theme.js"></script>
    <script src='../fullscreen.js'></script>
</body>

</html>
    
    ''')
    print(listaLink[z])
    f.close()
    os.chdir(owd)
    z=z+1
