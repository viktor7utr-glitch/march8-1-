const card = document.getElementById("card");
const home = document.getElementById("home");

const messages = {
1:"Поздравление №1",
2:"Поздравление №2",
3:"Поздравление №3",
4:"Поздравление №4"
};

function openCard(id){

document.getElementById("mainMusic").pause();

home.classList.remove("active");
card.classList.add("active");

card.innerHTML = `
<img src="images/guy${id}.jpg" class="bigPhoto">
<div class="message">${messages[id]}</div>
<button onclick="goHome()">Назад</button>
<audio autoplay loop>
<source src="music/guy${id}.mp3">
</audio>
`;
}

function goHome(){
card.classList.remove("active");
home.classList.add("active");
document.getElementById("mainMusic").play();
}
