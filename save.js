// HouseQuest AR - save.js

const SAVE_KEY = "housequest_save";

// Játék mentése
function saveGame() {

    const data = {

        player: typeof player !== "undefined" ? player : null,

        xp: typeof xp !== "undefined" ? xp : 0,

        level: typeof level !== "undefined" ? level : 1,

        coins: typeof coins !== "undefined" ? coins : 0,

        health: typeof health !== "undefined" ? health : 100,

        inventory: typeof inventory !== "undefined" ? inventory : []

    };

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(data)
    );

    console.log("Játék elmentve.");
}

// Játék betöltése
function loadGame() {

    const save = localStorage.getItem(SAVE_KEY);

    if (!save) return;

    const data = JSON.parse(save);

    if (data.player && typeof player !== "undefined") {
        player.x = data.player.x;
        player.y = data.player.y;
        player.z = data.player.z;
    }

    if (typeof xp !== "undefined")
        xp = data.xp;

    if (typeof level !== "undefined")
        level = data.level;

    if (typeof coins !== "undefined")
        coins = data.coins;

    if (typeof health !== "undefined")
        health = data.health;

    if (
        Array.isArray(data.inventory) &&
        typeof inventory !== "undefined"
    ) {

        inventory.length = 0;

        data.inventory.forEach(item => inventory.push(item));

        if (typeof refreshInventory === "function")
            refreshInventory();
    }

    console.log("Mentés betöltve.");
}

// Automatikus mentés 30 másodpercenként
setInterval(saveGame, 30000);

// Betöltés induláskor
loadGame();

// Mentés az oldal bezárásakor
window.addEventListener("beforeunload", saveGame);