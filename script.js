let strtest, splitstr, testMFVF
let p
    // let textarray = []
let MFspan = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(24);
    let posX = width / 2;
    let posY = height / 8;

    p = createDiv()
    let fontsize = 150;

    strtest = 'MAGNETIC FIELD';
    splitstr = strtest.split('');

    background("#000000");

    for (let i = 0; i < splitstr.length; i++) {
        let ic = createSpan(splitstr[i])
        MFspan.push(ic)
        console.log(ic.position)
        ic.parent(p);
        console.log(ic.position)
    }
    p.style('font-size', fontsize + 'px');
    p.center();
}

function draw() {
    let diff = mouseX - width / 2;

    for (let i = 0; i < splitstr.length; i++) {
        let pfontslnt = constrain(map(diff / i, -200, 200, -45, 45), -45, 45);
        let pfontweight = constrain(map(diff, -200, 200, 0, 45), 0, 245);
        // console.log(MFspan[i].position);

        MFspan[i].style('font-variation-settings', "'slnt' " + pfontslnt);
        MFspan[i].style('font-size', pfontweight + 100 + "px");
        MFspan[i].style('font-weight', pfontweight + "pt");

        // MFspan[i].style('font-weight', pfontweight + "pt");
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}