function unlock(){
  const pass = document.getElementById("passInput").value;
  const error = document.getElementById("error");

  if(pass === "259$Pura"){   // change password here
    document.getElementById("lockScreen").style.display="none";
  }else{
    error.innerText="Wrong password 💔";
  }
}

window.onload = ()=>{

const countdown = document.getElementById("countdown");
const countScreen = document.getElementById("countScreen");
const scene = document.getElementById("scene");
const video = document.getElementById("video");
const centerText = document.getElementById("centerText");
const photoArea = document.getElementById("photoArea");
const beat = document.getElementById("beat");
const music = document.getElementById("music");

let count = 3;

/* COUNTDOWN */
const timer = setInterval(()=>{
  beat.currentTime=0;
  beat.play().catch(()=>{});
  countdown.innerText = count;
  count--;
  if(count < 0){
    clearInterval(timer);
    countdown.innerText = "Tap ❤️";
  }
},1000);

/* TAP */
countdown.onclick = ()=>{
  countScreen.style.display="none";
  scene.classList.remove("hide");
  music.play().catch(()=>{});

  setTimeout(()=>{
    centerText.style.opacity=1;
    centerText.style.transform="translateY(0)";
  },400);

  setTimeout(()=>{
    video.style.opacity=1;
    video.style.transform="translateX(0)";
    video.muted=false;
    video.play().catch(()=>{});
  },900);

  const imgs=[
    "p1.jpg","p2.jpg","p3.jpg",
    "p4.jpg","p5.jpg","p6.jpg",
    "p7.jpg","p8.jpg","p9.jpg"
  ];

  imgs.forEach((img,i)=>{
    setTimeout(()=>{
      const im=document.createElement("img");
      im.src=img;
      im.className="photo";
      photoArea.appendChild(im);
      setTimeout(()=>im.classList.add("show"),50);
    },i*200);
  });
};

};
