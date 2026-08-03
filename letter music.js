let bgm = new Audio("theri bus.mp3");

bgm.loop = true;

// Play / Pause
function toggleMusic(){

    let btn = document.getElementById("musicBtn");

    if(bgm.paused){

        bgm.play();

        if(btn){
            btn.innerHTML="💖";
        }

    }else{

        bgm.pause();

        if(btn){
            btn.innerHTML="❤️";
        }

    }

}
window.addEventListener("load", () => {
    bgm.play();
    let btn = document.getElementById("musicBtn");
    if(btn){
        btn.innerHTML = "💖";
    }
});