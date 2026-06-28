// HouseQuest AR - player.js

const player = {
    x: 0,
    y: 0,
    z: 5,
    speed: 0.08
};

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Érintéses vezérlés
let touchStartX = 0;
let touchStartY = 0;

window.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchmove", (e) => {

    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;

    player.x += dx * 0.003;
    player.z += dy * 0.003;

    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

function updatePlayer() {

    if (keys["w"]) player.z -= player.speed;
    if (keys["s"]) player.z += player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["d"]) player.x += player.speed;

    if (typeof camera !== "undefined") {
        camera.position.x = player.x;
        camera.position.z = player.z;
    }
}

// Frissítés 60 FPS körül
setInterval(updatePlayer, 16);