// HouseQuest AR - game.js

const video = document.getElementById("camera");
const canvas = document.getElementById("game");
const scanButton = document.getElementById("scanButton");
const mission = document.getElementById("mission");

// Kamera indítása
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "environment"
            },
            audio: false
        });

        video.srcObject = stream;
    } catch (err) {
        alert("Nem sikerült elindítani a kamerát.");
        console.error(err);
    }
}

startCamera();

// Three.js
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Piros kocka
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshNormalMaterial()
);

scene.add(cube);

// Szkennelés gomb
scanButton.onclick = () => {
    mission.innerHTML = "✔ Szkennelés kész! Keresd meg a kockát!";
    cube.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        -3
    );
};

// Telefon forgatása
window.addEventListener("deviceorientation", (e) => {

    camera.rotation.order = "YXZ";

    camera.rotation.y = THREE.MathUtils.degToRad(e.alpha || 0);
    camera.rotation.x = THREE.MathUtils.degToRad(e.beta || 0);
});

// Átméretezés
window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});

// Játék ciklus
function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    renderer.render(scene, camera);

}

animate();