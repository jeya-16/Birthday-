let bgm = new Audio("uyire.mp3");

bgm.loop = true;

// saved song time
let savedTime = localStorage.getItem("coupleSongTime");

if(savedTime){
    bgm.currentTime = savedTime;
}

// play button
function playMusic(){

    bgm.play();

    localStorage.setItem("coupleSongPlaying","true");

}

// ON / OFF button
function toggleMusic(){

    let btn = document.getElementById("musicBtn");

    if(bgm.paused){

        bgm.play();

        localStorage.setItem("coupleSongPlaying","true");

        if(btn){
            btn.innerHTML="💖";
        }

    }else{

        bgm.pause();

        localStorage.setItem("coupleSongPlaying","false");

        if(btn){
            btn.innerHTML="❤️";
        }

    }

}

// save current time
setInterval(()=>{

    if(!bgm.paused){

        localStorage.setItem(
            "coupleSongTime",
            bgm.currentTime
        );

    }

},1000);

// next page open aana continue
window.addEventListener("load",()=>{

    let status = localStorage.getItem("coupleSongPlaying");

    let btn = document.getElementById("musicBtn");

    if(status === "true"){

        bgm.play();

        if(btn){
            btn.innerHTML="💖";
        }

    }else{

        if(btn){
            btn.innerHTML="❤️";
        }

    }

});