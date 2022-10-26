let strtest, splitstr, testMFVF

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(24);

    // p = createP('The Flexible Future of Typography');

    strtest = 'Magnetic Field';
    splitstr = strtest.split('');
    testMFVF = splitstr.join('');
    // let testMFVF = splitstr.toString();
    console.log(strtest)
    console.log(splitstr)
    console.log(testMFVF)
    p = createP(testMFVF)

}


function draw() {
    background("#000000");

    let posX = 0;
    let posY = height / 8;

    let fontsize = 150;


    // console.log(p)
    p.style('align', 'top');
    splitstr[0].style('left', 100)
    let pfontweight = constrain(map(mouseX, 0, width, -45, 45), -45, 45);
    for (let i = 0; i < splitstr.length; i++) {
        p.style('font-variation-settings', "'slnt' " + pfontweight);
    }
    p.style('font-size', fontsize + 'px');
    p.style('font-weight', pfontweight);


    p.position(posX, posY);
    // console.log(p.style('font-variation-settings'))
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}