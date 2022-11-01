let strtest, splitstr, testMFVF
let p
let MFspan = [];
let cursor;
let posX = window.innerWidth / 2;
let posY = window.innerHeight / 8;
let x = 0;
let y = 0;

p = document.getElementById("mftest");

function initialize() {
    strtest = document.getElementById("textarea").value;

    splitstr = strtest.split('');

    for (let i = 0; i < splitstr.length; i++) {
        // let ic = createSpan(splitstr[i])
        let ic = document.createElement("span");
        ic.classList.add("ics");
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        p.append(MFspan[i]);
    }

    cursor = document.createElement("span");
    cursor.setAttribute("id", "cursor");
    cursor.innerHTML = "🧲";

    // console.log
    // console.log(p.children[1])
    // p.children[1].remove()
    // console.log(p.children[1])
}

initialize()

let splitstrnum;
let ie = 12;
const tick = () => {

    splitstrnum = splitstr.length;
    console.log('1 previou s l : ' + splitstrnum)

    strtest = document.getElementById("textarea").value;
    splitstr = strtest.split('');
    console.log('2 s l : ' + splitstr.length)

    if (splitstrnum != splitstr.length) {
        console.log('3 previou s l : ' + splitstrnum)
        if (splitstrnum < splitstr.length) {
            let ic = document.createElement("span")
            MFspan.push(ic)
            p.append(ic)
        }
        if (splitstrnum > splitstr.length) {
            let num = splitstrnum - 1;
            // console.log(p)
            // console.log('num :' + num)
            // console.log('s l : ' + splitstr.length)
            while (num > splitstr.length) {
                p.children[num].remove();
                num--;
                // console.log(p)
                // console.log('num :' + num)
                // console.log('s l : ' + splitstr.length)
            }
        }
    }
    console.log('4 previou s l : ' + splitstrnum)
        // if (ie > 9) {
        //     ie--;
        //     console.log(ie)
        // }
        // console.log(splitstr.length)
        // splitstrnum = splitstr.length - splitstrnum;
        // splitstrnum
    for (let i = 0; i < splitstr.length; i++) {
        // p.childNode = splitstr.length
        MFspan[i].innerHTML = splitstr[i]


        let posx = getOffset(MFspan[i]).left;
        let posy = getOffset(MFspan[i]).top;

        let xdist = posx - x;
        let ydist = y - posy;

        let testleft = xdist / 160 * 45 * ydist / 160;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * 9 + 1 - Math.abs(ydist / window.innerHeight) * 9) * 900;

        MFspan[i].style.setProperty("--slant", testleft);
        MFspan[i].style.setProperty("--weight", testw);

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