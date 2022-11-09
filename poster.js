// console.log('poster')
let postersime = 0;
let noisemovement;
let backgroundimg;
let Area;
let strength;
let s;

let modecheck = document.getElementById("mode");
let p1 = document.getElementById("posterleft");
let p2 = document.getElementById("posterright");
let p3 = document.getElementById("postertop");
let p4 = document.getElementById("posterbottom");

let bgimg = document.getElementById('bgimg');

let x, y;

let maxarea;

let noise = new perlinNoise3d();
noise.noiseSeed(Math.E);

function posterinitial() {
    p1str = "MAGNETIC FIELD";
    p1spanarray = p1str.split('');
    for (let i = 0; i < p1spanarray.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("p1_ics");
        ic.innerHTML = p1spanarray[i];
        // MFspan.push(ic);
        p1.append(ic);
    }
    for (let i = 0; i < p1spanarray.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("p1_ics");
        ic.innerHTML = p1spanarray[i];
        // MFspan.push(ic);
        p2.append(ic);
    }
    p3str = "MAGNETIC FIELD  MAGNETIC FIELD";
    p3spanarray = p1str.split('');
    for (let i = 0; i < p3spanarray.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("p1_ics");
        ic.innerHTML = p3spanarray[i];
        // MFspan.push(ic);
        p3.append(ic);
    }
    for (let i = 0; i < p3spanarray.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("p1_ics");
        ic.innerHTML = p3spanarray[i];
        // MFspan.push(ic);
        p4.append(ic);
    }


}

posterinitial()

const tickposter = () => {

    postersime += 0.01
    noisemovement = document.getElementById("noisemove");
    backgroundimg = document.getElementById("bmgcheck");

    strength = document.getElementById("myStrengthRange").value;
    Area = document.getElementById("myAreaRange").value;

    s = map(strength, 0, 1000, 0, Area);

    maxarea = 20;
    // if (modecheck.checked) {
    poster()
        // }
    window.requestAnimationFrame(tickposter)
}

tickposter()

function poster() {
    // / PPPPPP1111111 left


    if (backgroundimg.checked) {
        bgimg.style.visibility = 'visible';
    } else {
        bgimg.style.visibility = 'hidden';
    }

    // p1str = document.getElementById("P1").value;
    for (let i = 0; i < p1spanarray.length; i++) {
        // p1.childNodes[i].innerHTML = splitstr[i]

        let posx = getOffset(p1.childNodes[i]).left;
        let posy = getOffset(p1.childNodes[i]).top;

        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = posy - y;

        let testleft = xdist / 160 * 45 * ydist / 160;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;

        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        dist = clamp(dist, 0, Area);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;

        if (noisemovement.checked) {
            p1.childNodes[i].style.setProperty("--slant", testleft * strength + directoffsite * offsetnoise);
            p1.childNodes[i].style.setProperty("--weight", testw);
        } else {
            p1.childNodes[i].style.setProperty("--slant", testleft * strength);
            p1.childNodes[i].style.setProperty("--weight", testw);
        }
    }

    // PPPPPP222222222 right
    for (let i = 0; i < p1spanarray.length; i++) {
        // p1.childNodes[i].innerHTML = splitstr[i]

        let posx = getOffset(p2.childNodes[i]).left;
        let posy = getOffset(p2.childNodes[i]).top;

        let xdist = posx - x;
        let ydist = posy - y;
        let mousedist = getDistance(x, y, posx, posy)

        let testleft = xdist / 160 * 45 * ydist / 160;
        // let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;
        let testw = map(mousedist, 0, 100, 900, 100);

        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;

        if (noisemovement.checked) {
            p2.childNodes[i].style.setProperty("--slant", testleft * strength + directoffsite * offsetnoise);
            p2.childNodes[i].style.setProperty("--weight", testw);
        } else {
            p2.childNodes[i].style.setProperty("--slant", testleft * strength);
            p2.childNodes[i].style.setProperty("--weight", testw);
        }
    }

    // PPPPPP33333333 top
    for (let i = 0; i < p3spanarray.length; i++) {
        // p1.childNodes[i].innerHTML = splitstr[i]

        let posx = getOffset(p3.childNodes[i]).left;
        let posy = getOffset(p3.childNodes[i]).top;

        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = y - posy;

        let testleft = xdist / 160 * 45 * ydist / 160;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;

        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;

        if (noisemovement.checked) {
            p3.childNodes[i].style.setProperty("--slant", testleft * strength + directoffsite * offsetnoise);
            p3.childNodes[i].style.setProperty("--weight", testw);
        } else {
            p3.childNodes[i].style.setProperty("--slant", testleft * strength);
            p3.childNodes[i].style.setProperty("--weight", testw);
        }
    }


    // PPPPP44444444 bottom
    for (let i = 0; i < p3spanarray.length; i++) {
        let posx = getOffset(p4.childNodes[i]).left;
        let posy = getOffset(p4.childNodes[i]).top;
        let xdist = posx - x;
        let ydist = y - posy;
        let mousedist = getDistance(x, y, posx, posy);
        let mouseangle = angle(posx, posy, x, y);
        mouseangle = map(Math.abs(mouseangle), 0, 180, 45, -45)

        let testangle = map(mousedist, s, Area, 0, mouseangle);

        let testw = map(mousedist, s, Area, 900, 100);

        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        // offsetnoise = map(dist, 0, maxarea, 0, 4);
        // effectarea = map(dist, 0, Area, testw, );
        // effectarea = clamp(effectarea, 0, 1);

        p4.childNodes[i].style.setProperty("--slant", testangle);
        p4.childNodes[i].style.setProperty("--weight", testw);
        // if (noisemovement.checked) {
        //     p4.childNodes[i].style.setProperty("--slant", testleft * strength + directoffsite * offsetnoise);
        //     p4.childNodes[i].style.setProperty("--weight", testw);
        // } else {
        //     p4.childNodes[i].style.setProperty("--slant", testleft * strength * effectarea);
        //     p4.childNodes[i].style.setProperty("--weight", 100);
        // }
    }
}

document.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
});

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left,
        // top: rect.top + window.scrollY
        top: rect.top
    };
}

function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}


function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}

function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
}