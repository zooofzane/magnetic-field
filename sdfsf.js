let MagnetField, splitstr, displaytext
testMFVF = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(24);

    // p = createP('The Flexible Future of Typography');

    MagnetField = 'Magnetic Field';
    splitstr = MagnetField.split('');

    // let testMFVF = splitstr.toString();
    // console.log(strtest)
    console.log(splitstr)
        // console.log(testMFVF)


}


function draw() {
    background("#000000");

    let posX = 0;
    let posY = height / 8;

    let fontsize = 150;
    // [...strtest].forEach(c => console.log(c))
    // testMFVF = splitstr.join('');
    // p = createP(testMFVF)


    // console.log(p)
    // p.style('align', 'top');
    // splitstr[0].style('left', 100)
    let pfontweight = constrain(map(mouseX, 0, width, -45, 45), -45, 45);
    // for (let i = 0; i < splitstr.length; i++) {
    //     let a = createSpan(splitstr[i]);
    //     a.style('font-weight', pfontweight);
    //     a.style('font-size', fontsize);
    displaytext = splitstr.join('');
    console.log(displaytext)
        // }
    p = createP(displaytext)
    p.style('font-size', fontsize + 'px');
    p.style('font-weight', pfontweight);


    p.position(posX, posY);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}