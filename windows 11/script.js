
let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

start.addEventListener("click", () => {
    console.log("clicked");
    if (startmenu.style.bottom == "-90px") {
        startmenu.style.bottom = "-655px"
    }
    else {
        startmenu.style.bottom = "-90px"
    }
})

let recyclebin = document.getElementsByClassName("recyclebin")[0]
let bin = document.getElementById("bin")
bin.addEventListener("click", () => {
    console.log("clicked");
    if (recyclebin.style.left == "100px") {
        recyclebin.style.left = "-350px"
    }
    else {
        recyclebin.style.left = "100px"
    }
})

function togglefunc() {
    var toggle = document.getElementById("toggle").getAttribute("style");
  

        if (toggle == "transform: translateX(20px);") {
            document.getElementById("toggle").style.transform = "translateX(0px)";
            document.getElementById("bodybg").style.backgroundColor = "#ffffff";
           
        }
        
        else {
            document.getElementById("toggle").style.transform = "translateX(20px)";
            document.getElementById("bodybg").style.backgroundColor = "#000";
            
        }
}
   