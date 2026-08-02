let bgm = new Audio("Vaseegara.mp3");

bgm.loop = true;

let savedTime = localStorage.getItem("songTime");

if(savedTime){
    bgm.currentTime = savedTime;
}

let isPlaying = localStorage.getItem("songPlaying");

if(isPlaying === "true"){
    bgm.play();
}


setInterval(function(){

if(!bgm.paused){

localStorage.setItem("songTime", bgm.currentTime);

}

},1000);


function playMusic(){

bgm.play();

localStorage.setItem("songPlaying","true");

}


function pauseMusic(){

bgm.pause();

localStorage.setItem("songPlaying","false");

}