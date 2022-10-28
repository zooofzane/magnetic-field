let strtest, splitstr, testMFVF
let p
let MFspan = [];

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 8;

function initialize() {
    p = document.getElementById("mftest");
    let fontsize = 150;

    // strtest = 'Magnetic Field';
    strtest = 'MAGNETIC FIELD';
    splitstr = strtest.split('');

    for (let i = 0; i < splitstr.length; i++) {
        // let ic = createSpan(splitstr[i])
        let ic = document.createElement("span")
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        p.append(ic);
    }
}
initialize()

// const body = document.querySelector("body");

document.addEventListener('mousemove', (e) => {

    let x = e.clientX;
    let y = e.clientY;
    // translate(x, y);
    for (let i = 0; i < splitstr.length; i++) {
        let testleft = (getOffset(MFspan[1]).left - x) / window.innerWidth * 45;
        // let testleft = Math.abs(getOffset(MFspan[1]).left - x);
        // console.log(testleft)
        // MFspan[i].style.fontvariationsettings = "wght" + testleft;
        MFspan[i].style.setProperty("--font-variation-settings", "'slnt'" + testleft);
        // MFspan[i].style.fontVariationSettings = "slnt" + testleft;

    }
    // console.log(x)
});

// window.addEventListener("resize", initialize(), true);

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}