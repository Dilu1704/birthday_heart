const password = document.getElementById("password");
const countdown = document.getElementById("countdown");
const main = document.getElementById("main");
const countEl = document.getElementById("count");
const tapBtn = document.getElementById("tapBtn");

const countMusic = document.getElementById("countMusic");
const bdayMusic = document.getElementById("bdayMusic");

let num = 3;

function checkPass(){
  if(document.getElementById("pass").value !== "123@123"){
    alert("Wrong Password 💔");
    return;
  }

  password.classList.add("hidden");
  countdown.classList.remove("hidden");
  countMusic.play();

  const timer = setInterval(()=>{
    num--;
    countEl.innerText = num;

    if(num === 0){
      clearInterval(timer);
      countMusic.pause();
      tapBtn.classList.remove("hidden");
    }
  },1000);
}

function startMain(){
  countdown.classList.add("hidden");
  main.classList.remove("hidden");
  bdayMusic.play();
  loadPhotos();
}

function loadPhotos(){
  const box = document.getElementById("photos");
  for(let i=1;i<=10;i++){
    const img = document.createElement("img");
    img.src = `photos/p${i}.jpg`;
    box.appendChild(img);
  }
}
