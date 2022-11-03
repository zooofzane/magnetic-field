console.log('poster')
    // let time = 1;
let tsime = 54;

let modecheck = document.getElementById("mode");
let p1 = document.getElementById("left");
let p2 = document.getElementById("right");
let p3 = document.getElementById("top");
let p4 = document.getElementById("bottom")
// noise.seed(Math.random());

const tickposter = () => {
        time += 0.01
        tsime -= 0.05

        var value = perlin.get(60, time);

        if(modecheck.checked){

        }





        // if

        // console.log(value)
        window.requestAnimationFrame(tickposter)

        // console.log(p)
    }
    // tickposter()