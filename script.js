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

    // console.log(p.children[0])
}

initialize()

// function changetext(e) {
//     let splitstr = e.split('');
//     // console.log(splitstr)
//     // MFspan = [];
//     for (let i = 0; i < splitstr.length; i++) {
//         //     // let ic = createSpan(splitstr[i])
//         //     // let ic = document.createElement("span")
//         //     // ic.innerHTML = splitstr[i];
//         // MFspan.push(splitstr[i]);
//         //     // p.append(ic);
//     }
// }

// function update() {
//     strtest = document.getElementById("textarea").value;
//     splitstr = strtest.split('');
//     MFspan.slice(0, MFspan.length);
//     let texts = document.querySelectorAll('.ics')
//     texts.forEach(box => {
//         box.remove();
//     });
//     for (let i = 0; i < splitstr.length; i++) {
//         // let ic = createSpan(splitstr[i])
//         let ic = document.createElement("span")
//         ic.innerHTML = splitstr[i];
//         MFspan.push(ic)
//         p.append(ic);
//     }
// }

let splitstrnum;

const tick = () => {

    splitstrnum = splitstr.length;

    strtest = document.getElementById("textarea").value;
    splitstr = strtest.split('');
    if (splitstrnum != splitstr.length) {
        if (splitstrnum < splitstr.length) {
            let ic = document.createElement("span")
            MFspan.push(ic)
            p.append(ic)
        }
        if (splitstrnum > splitstr.length) {
            let num = splitstrnum - 1;
            if (num > splitstr.length) {
                p.children[2].remove;
                num--;
            }
        }
    }
    // console.log(splitstr.length)
    splitstrnum = splitstr.length - splitstrnum;
    splitstrnum
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