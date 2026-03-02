const card = document.getElementById("card");
const home = document.getElementById("home");
const player = document.getElementById("player");

const messages = {
1:"Поздравление №1",
2:"Поздравление №2",
3:"Поздравление №3",
4:"Поздравление №4"
};

// музыка главной страницы
function playMainMusic(){
    player.src = "music/main.mp3";
    player.play().catch(()=>{});
}

// открыть поздравление
function openCard(id){

home.classList.remove("active");
card.classList.add("active");

// меняем музыку
player.src = `music/guy${id}.mp3`;
player.currentTime = 0;
player.play();

card.innerHTML = `
<img src="images/guy${id}.jpg" class="bigPhoto">
<div class="message">${messages[id]}</div>
<button onclick="goHome()">Назад</button>
`;
}

// вернуться назад
function goHome(){

card.classList.remove("active");
home.classList.add("active");

playMainMusic();
}

// запуск музыки после первого клика пользователя
document.body.addEventListener("click", function startMusic(){
    playMainMusic();
    document.body.removeEventListener("click", startMusic);
});
