let i=1;
let rinjani=["assets/images/gunung/rinjani/0.jpg", "assets/images/gunung/rinjani/1.jpg", "assets/images/gunung/rinjani/2.jpg"];
let merbabu=["assets/images/gunung/merbabu/0.jpg", "assets/images/gunung/merbabu/1.jpg", "assets/images/gunung/merbabu/2.jpg"];
let pink=["assets/images/pantai/pink/0.jpg", "assets/images/pantai/pink/1.jpg", "assets/images/pantai/pink/2.jpg"];
let grinjani=document.querySelector("#p-rinjani");
let gmerbabu=document.querySelector("#p-merbabu");
let gpink=document.querySelector("#p-pink");

function toggle() {
    grinjani.setAttribute("src",rinjani[i]);
    gmerbabu.setAttribute("src",merbabu[i]);
    gpink.setAttribute("src",pink[i]);
    i = (i + 1) % rinjani.length;
}
setInterval(toggle, 2000);