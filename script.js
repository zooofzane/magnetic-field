let strtest, splitstr, testMFVF
let splitstrnum;
let p
let MFspan = [];
let cursor;
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 8;
let x = 0;
let y = 0;
let time = 0;
let noise = new perlinNoise3d();
noise.noiseSeed(Math.E);

p = document.getElementById("mftest");

function initialize() {
    strtest = document.getElementById("textarea").value;

    splitstr = strtest.split('');

    for (let i = 0; i < splitstr.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("ics");
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        p.append(MFspan[i]);
    }

    cursor = document.createElement("span");
    cursor.setAttribute("id", "cursor");
    cursor.innerHTML = "🧲";

}

initialize()

const tick = () => {

    splitstrnum = splitstr.length;

    time += 0.005;

    strtest = document.getElementById("textarea").value;
    splitstr = strtest.split('');
    noisemovement = document.getElementById("noisemove");

    if (splitstrnum != splitstr.length) {
        console.log('3 previou sl: ' + splitstrnum)
        console.log('2 sl: ' + splitstr.length)

        if (splitstrnum < splitstr.length) {
            let ic = document.createElement("span")
            ic.innerHTML = strtest[splitstrnum]
            ic.classList.add("icsplus");
            MFspan.push(ic)
            console.log(MFspan)
            p.append(ic)
            console.log('p <: ' + p.childNodes)
        }

        if (splitstrnum > splitstr.length) {
            let num = splitstrnum - splitstr.length;
            for (let i = 0; i < num; i++) {
                p.children[0].remove();
                console.log(p.childNodes)
                num--;
                console.log("numafterreduce: " + num)
            }
        }
        console.log(p.childNodes)
    }

    let maxarea = document.getElementById("myAreaRange").value;

    for (let i = 0; i < splitstr.length; i++) {
        p.childNodes[i].innerHTML = splitstr[i]

        let posx = getOffset(p.childNodes[i]).left;
        let posy = getOffset(p.childNodes[i]).top;

        let xdist = posx - x;
        let ydist = y - posy;

        let testleft = xdist / 160 * 45 * ydist / 160;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;

        let directoffsite = noise.get(posx * 0.001, posy * 0.04, time) * 190 - 75;
        let dist = getDistance(posx, posy, x, y);
        let offsetnoise = 0;
        offsetnoise = clamp(offsetnoise, 0, 1);
        offsetnoise = map(dist, 0, maxarea, 0, 4);
        let strength = document.getElementById("myStrengthRange").value;

        if (noisemovement.checked) {
            p.childNodes[i].style.setProperty("--slant", testleft * strength + directoffsite * offsetnoise);
            p.childNodes[i].style.setProperty("--weight", testw);
        } else {
            p.childNodes[i].style.setProperty("--slant", testleft * strength);
            p.childNodes[i].style.setProperty("--weight", testw);
        }
    }
    window.requestAnimationFrame(tick)
}

tick()

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