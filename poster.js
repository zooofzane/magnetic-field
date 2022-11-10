// console.log('poster')
let postersime = 0;
let noisemovement, fieldonoff;
let backgroundimg;
let Area;
let strength;
let s;
let volume;

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
    fieldonoff = document.getElementById("swithcer");

    strength = document.getElementById("myStrengthRange").value;
    Area = document.getElementById("myAreaRange").value;
    volume = document.getElementById("myVolumeRange").value;



    s = map(strength, 0, 1000, 0, Area);

    maxarea = 20;

    if (backgroundimg.checked) {
        bgimg.style.visibility = 'visible';
    } else {
        bgimg.style.visibility = 'hidden';
    }


    var r = document.querySelector(':root');
    // r.style.setProperty('--weight', 100);
    if (fieldonoff.checked) {
        poster()
            // console.log(1)
    } else {
        // console.log(2)
        r.style.setProperty('--weight', 200);
        r.style.setProperty('--slant', 0);
    }

    // if (modecheck.checked) {
    // poster()
    // }
    window.requestAnimationFrame(tickposter)
}

tickposter()

function poster() {



    // p1str = document.getElementById("P1").value;


    // / PPPPPP1111111 left
    for (let i = 0; i < p1spanarray.length; i++) {
        let posx = getOffset(p1.childNodes[i]).left;
        let posy = getOffset(p1.childNodes[i]).top;
        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = posy - y;

        let testleft = xdist / 160 * 45 * ydist / 160 / 6;
        let mousedist = getDistance(x, y, posx, posy);
        mousedist = clamp(mousedist, s, Area)

        let testw = map(mousedist, s, Area, 900, 100);
        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        dist = clamp(dist, 0, Area);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;


        p1.childNodes[i].style.setProperty("--slant", testleft);
        p1.childNodes[i].style.setProperty("--weight", testw);
    }

    // PPPPPP222222222 right
    for (let i = 0; i < p1spanarray.length; i++) {
        let posx = getOffset(p2.childNodes[i]).left;
        let posy = getOffset(p2.childNodes[i]).top;
        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = posy - y;
        let mousedist = getDistance(x, y, posx, posy);
        mousedist = clamp(mousedist, s, Area)

        let testw = map(mousedist, s, Area, 900, 100);
        let testleft = xdist / 160 * 45 * ydist / 160 / 6;
        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        dist = clamp(dist, 0, Area);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;


        p2.childNodes[i].style.setProperty("--slant", testleft);
        p2.childNodes[i].style.setProperty("--weight", testw);
    }

    // PPPPPP33333333 top
    // let posx0 = getOffset(p3.childNodes[0]).left;
    // let posy0 = getOffset(p3.childNodes[0]).top;
    // posy0 = posy0 + 150;
    // let xdist = posx0 - x;
    // // let ydist = y - posy;
    // let ydist = posy0 - y;
    // let testleft = -xdist / 360 * 25 * ydist / 360;
    // console.log(testleft)
    for (let i = 0; i < p3spanarray.length; i++) {

        let posx = getOffset(p3.childNodes[i]).left;
        let posy = getOffset(p3.childNodes[i]).top;
        // posx
        posy = posy + 150;
        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = posy - y;
        let mousedist = getDistance(x, y, posx, posy);
        mousedist = clamp(mousedist, s, Area)

        let testw = map(mousedist, s, Area, 900, 100);
        let testleft = -xdist / 360 * 25 * ydist / 360 / 2;
        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        dist = clamp(dist, 0, Area);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;
        // testleft = testleft * 0.8;

        p3.childNodes[i].style.setProperty("--slant", testleft);
        p3.childNodes[i].style.setProperty("--weight", testw);



        // let posx = getOffset(p3.childNodes[i]).left;
        // let posy = getOffset(p3.childNodes[i]).top;
        // posx = posx + 20;
        // posy = posy + 30;
        // let mousedist = getDistance(x, y, posx, posy);
        // let mouseangle = angle(posx, posy, x, y);
        // if (mouseangle >= 0) {
        //     mouseangle = map(mouseangle, 45, 135, -45, 45);
        // } else {
        //     mouseangle = map(mouseangle, -45, -135, 45, -45);
        // }
        // mousedist = clamp(mousedist, s, Area)
        // let testangle = map(mousedist, 0, Area, mouseangle, 0);
        // let testw = map(mousedist, s, Area, 900, 100);


        // p3.childNodes[i].style.setProperty("--slant", testangle);
        // p3.childNodes[i].style.setProperty("--weight", testw);
    }


    // let posx9 = getOffset(p4.childNodes[0]).left;
    // let posy9 = getOffset(p4.childNodes[0]).top;
    // let mousedist = getDistance(x, y, posx9, posy9);
    // mousedist = clamp(mousedist, s, Area)
    // let mousessangle = angle(posx9, posy9, x, y);
    // if (mousessangle >= 0) {
    //     mousessangle = map(mousessangle, 45, 135, -45, 45);
    // } else {
    //     mousessangle = map(mousessangle, -45, -135, 45, -45);
    // }
    // mousessangle = map(mousedist, 0, 20, 0, mousessangle)
    // let testangl9e = map(mousedist, 0, Area, mousessangle * volume, 0);
    // // console.log(mousessangle);

    // p4.childNodes[0].style.setProperty("--slant", testangl9e);


    // PPPPP44444444 bottom
    for (let i = 0; i < p3spanarray.length; i++) {
        let posx = getOffset(p4.childNodes[i]).left;
        let posy = getOffset(p4.childNodes[i]).top;
        let xdist = posx - x;
        // let ydist = y - posy;
        let ydist = posy - y;
        let mousedist = getDistance(x, y, posx, posy);
        mousedist = clamp(mousedist, s, Area)

        let testw = map(mousedist, s, Area, 900, 100);
        let testleft = -xdist / 360 * 25 * ydist / 360 / 1.2;
        let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        dist = clamp(dist, 0, Area);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;

        p4.childNodes[i].style.setProperty("--slant", testleft);
        p4.childNodes[i].style.setProperty("--weight", testw);




        // let posx = getOffset(p4.childNodes[i]).left;
        // let posy = getOffset(p4.childNodes[i]).top;
        // posx = posx + 20;
        // posy = posy + 140;
        // let mousedist = getDistance(x, y, posx, posy);
        // mousedist = clamp(mousedist, s, Area)
        // let mouseangle = angle(posx, posy, x, y);
        // if (mouseangle >= 0) {
        //     mouseangle = map(mouseangle, 0, 179, -45, 45);
        // } else {
        //     mouseangle = map(mouseangle, -1, -179, 45, -45);
        // }
        // // mouseangle = map(mousedist, 0, 20, 0, mouseangle)
        // let testangle = map(mousedist, s, Area, mouseangle * 1.5, 0);
        // let testw = map(mousedist, s, Area, 900, 100);


        // p4.childNodes[i].style.setProperty("--slant", testangle);
        // p4.childNodes[i].style.setProperty("--weight", testw);

        // let directoffsite = noise.get(posx * 0.001, posy * 0.04, postersime) * 190 - 75;
        // let offsetnoise = 0;
        // offsetnoise = clamp(offsetnoise, 0, 1);
        // offsetnoise = map(dist, 0, maxarea, 0, 4);
        // effectarea = map(dist, 0, Area, testw, );
        // effectarea = clamp(effectarea, 0, 1);
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