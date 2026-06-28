// HouseQuest AR - ui.js

let health = 100;
let coins = 0;
let xp = 0;

const hud = document.createElement("div");

hud.id = "gameHud";

hud.innerHTML = `
<div id="stats">
❤️ Élet: <span id="health">100</span><br>
⭐ XP: <span id="xp">0</span><br>
🪙 Pénz: <span id="coins">0</span>
</div>

<button id="pauseBtn">⏸ Szünet</button>

<div id="inventory">
<h3>Tárgyak</h3>
<ul id="items"></ul>
</div>
`;

document.body.appendChild(hud);

const inventory = [];

function addItem(name){

    inventory.push(name);

    refreshInventory();

}

function refreshInventory(){

    const list = document.getElementById("items");

    list.innerHTML = "";

    inventory.forEach(item=>{

        const li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}

function addCoins(amount){

    coins += amount;

    document.getElementById("coins").textContent = coins;

}

function addXP(amount){

    xp += amount;

    document.getElementById("xp").textContent = xp;

}

function damage(amount){

    health -= amount;

    if(health < 0)
        health = 0;

    document.getElementById("health").textContent = health;

}

document.getElementById("pauseBtn").onclick = ()=>{

    if(confirm("Szünet. Folytatod?")){
        return;
    }

};

// Kezdő tárgyak
addItem("📱 Telefon");
addItem("🔦 Zseblámpa");
addItem("🗺 Térkép");