let bgm = new Audio("Vaseegara.mp3");

bgm.loop = true;


// saved song time
let savedTime = localStorage.getItem("songTime");

if(savedTime){
    bgm.currentTime = savedTime;
}


// play button
function playMusic(){

    bgm.play();

    localStorage.setItem("songPlaying","true");

}


// ON / OFF button

function toggleMusic(){

    let btn = document.getElementById("musicBtn");


    if(bgm.paused){

        bgm.play();

        localStorage.setItem("songPlaying","true");


        if(btn){
            btn.innerHTML="⏸️";
        }


    }else{


        bgm.pause();

        localStorage.setItem("songPlaying","false");


        if(btn){
            btn.innerHTML="▶️";
        }

    }

}



// save current time

setInterval(()=>{


if(!bgm.paused){

localStorage.setItem(
"songTime",
bgm.currentTime
);

}


},1000);



// next page open aana continue

window.addEventListener("load",()=>{


let status = localStorage.getItem("songPlaying");


if(status === "true"){

bgm.play();

}


});