let strtest, splitstr, testMFVF
let p
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

    for (let i = 0; i < splitstr.length; i++) {
        let ic = createSpan(splitstr[i])
        MFspan.push(ic)
        ic.parent(p);
    }
    p.style('font-size', fontsize + 'px');
}

function draw() {
    background("#000000");

    for (let i = 0; i < splitstr.length; i++) {
        // console.log(MFspan[i].style);
        // MFspan[i].getBoundingClientRect()
        let diff = abs(mouseX - width / 2);
        let pfontslnt = constrain(map(diff / (i + 1), -200, 200, -45, 45), -45, 45);
        let pfontweight = map(diff / (i + 1), 0, 400, 100, 900);
        // console.log(letterposition);
        MFspan[i].style('font-variation-settings', "'wght' " + pfontweight + ", 'slnt' " + pfontslnt);
    }

    p.center();

    // let a = document.getElementById('ppp');
    // a.innerHTML = 'hhsdfsdfhhh';
    // a.style.left = 100 + "px";
    // p.append(a)
    // let testst = getOffset(a).left;
    // console.log(a)
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}