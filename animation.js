
const backgrounds = [
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg"
];

let bgIndex = 0;
const aquarium = document.getElementById("aquarium");
aquarium.style.backgroundImage = `url(${backgrounds[0]})`;


document.getElementById("btnBg").onclick = () => {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    aquarium.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
};


const musicList = [
    "music/nhac1.mp3",
    "music/nhac2.mp3"
];

const music = document.getElementById("musicPlayer");
let musicIndex = 0;
music.src = musicList[0];


document.getElementById("btnMusic").onclick = () => {
    musicIndex = (musicIndex + 1) % musicList.length;
    music.src = musicList[musicIndex];
    music.play();
};

// Cá chuyển động ngẫu nhiên
const fishes = document.querySelectorAll(".fish");

fishes.forEach((fish, i) => {
    randomizeFish(fish, i);
});


function randomizeFish(fish) {
    const speed = Math.random() * 10 + 8; // tốc độ mượt
    const topPos = Math.random() * 80 + 10; // vị trí ngẫu nhiên

    fish.style.top = topPos + "vh";
    fish.style.animationDuration = speed + "s";

    // Lặp khi cá ra khỏi màn hình
    fish.addEventListener("animationiteration", () => {
        randomizeFish(fish);
    });
}
