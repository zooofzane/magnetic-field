let strtest, splitstr, testMFVF
let p
let MFspan = [];
let cursor;
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 8;

var textinput = document.getElementById("mytext");
// textinput.setAttribute("type", "text");
// var folder1 = gui.addFolder('Flow Field');



function initialize() {
    p = document.getElementById("mftest");
    let fontsize = 150;

    strtest = 'Magnetic Field';
    // strtest = textinput.value;

    // strtest = 'MAGNETIC FIELD';
    splitstr = strtest.split('');

    // let



    for (let i = 0; i < splitstr.length; i++) {
        // let ic = createSpan(splitstr[i])
        let ic = document.createElement("span")
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        p.append(ic);
    }
    // console.log(p);
    cursor = document.createElement("span");
    cursor.setAttribute("id", "cursor");
    cursor.innerHTML = "🧲";
    // document.body.append(cursor)
    // document.body.append(gui)


}
initialize()

// const body = document.querySelector("body");

document.addEventListener('mousemove', (e) => {
    console.log(textinput.value)
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.setProperty("--cursorx", x + "px");
    cursor.style.setProperty("--cursory", y + "px");
    // translate(x, y);
    for (let i = 0; i < splitstr.length; i++) {

        let posx = getOffset(MFspan[i]).left;
        let posy = getOffset(MFspan[i]).top;

        let xdist = posx - x;
        let ydist = y - posy;

        let testleft = xdist / 160 * 45 * ydist / 160;
        // let testw = Math.abs(1 - xdist / window.innerWidth * ydist / window.innerHeight) * 900;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;

        MFspan[i].style.setProperty("--slant", testleft);
        MFspan[i].style.setProperty("--weight", testw);

    }
});

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left,
        // top: rect.top + window.scrollY
        top: rect.top
    };
}