// HouseQuest AR - map.js

// Padló
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({
    color: 0x666666,
    side: THREE.DoubleSide
});

const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
floor.position.y = -1;

scene.add(floor);

// Fal készítő
function createWall(x, y, z, w, h, d) {

    const wall = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshBasicMaterial({
            color: 0x8888ff
        })
    );

    wall.position.set(x, y, z);

    scene.add(wall);
}

// Szoba falai
createWall(0, 1, -10, 20, 4, 0.5);
createWall(0, 1, 10, 20, 4, 0.5);
createWall(-10, 1, 0, 0.5, 4, 20);
createWall(10, 1, 0, 0.5, 4, 20);

// Dobozok
for (let i = 0; i < 10; i++) {

    const box = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshNormalMaterial()
    );

    box.position.set(
        (Math.random() - 0.5) * 16,
        -0.5,
        (Math.random() - 0.5) * 16
    );

    scene.add(box);
}

console.log("Pálya betöltve.");