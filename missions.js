// HouseQuest AR - missions.js

let xp = 0;
let level = 1;
let currentMission = 0;

const missions = [
    {
        title: "Szkenneld be a szobát!",
        reward: 10
    },
    {
        title: "Nézz a 3D kockára!",
        reward: 20
    },
    {
        title: "Fordulj körbe a telefonnal!",
        reward: 30
    },
    {
        title: "Érj a célponthoz!",
        reward: 40
    },
    {
        title: "Teljesíts 5 küldetést!",
        reward: 50
    }
];

function showMission() {
    const missionBox = document.getElementById("mission");

    if (currentMission >= missions.length) {
        missionBox.innerHTML = "🎉 Minden küldetés kész!";
        return;
    }

    missionBox.innerHTML =
        "Küldetés:<br>" +
        missions[currentMission].title +
        "<br><br>XP: " + xp +
        "<br>Szint: " + level;
}

function completeMission() {

    if (currentMission >= missions.length)
        return;

    xp += missions[currentMission].reward;

    currentMission++;

    if (xp >= level * 50) {
        level++;
        alert("Szintlépés! Most már " + level + ". szintű vagy.");
    }

    showMission();
}

showMission();