let bgm = new Audio("yaro ivan.mp3");

bgm.loop = true;

// saved song time
let savedTime = localStorage.getItem("photoSongTime");

if(savedTime){
    bgm.currentTime = savedTime;
}

// play button
function playMusic(){

    bgm.play();

    localStorage.setItem("photoSongPlaying","true");

}

// ON / OFF button
function toggleMusic(){

    let btn = document.getElementById("musicBtn");

    if(bgm.paused){

        bgm.play();

        localStorage.setItem("photoSongPlaying","true");

        if(btn){
            btn.innerHTML="⏸️";
        }

    }else{

        bgm.pause();

        localStorage.setItem("photoSongPlaying","false");

        if(btn){
            btn.innerHTML="▶️";
        }

    }

}

// save current time
setInterval(()=>{

if(!bgm.paused){

localStorage.setItem(
"photoSongTime",
bgm.currentTime
);

}

},1000);

// next page open aana continue
window.addEventListener("load",()=>{

let status = localStorage.getItem("photoSongPlaying");

let btn = document.getElementById("musicBtn");

if(status === "true"){

bgm.play();

if(btn){
btn.innerHTML="⏸️";
}

}else{

if(btn){
btn.innerHTML="▶️";
}

}

});