const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const speedInput = document.getElementById("speedInput");
const character = document.querySelector(".char");

let speed = 40;
let x = 0;
let y = 0;

character.style.position = "relative";
character.style.top = "0px";
character.style.left = "0px";

if (speedInput) {
    speedInput.value = speed;
    speedInput.addEventListener("change", e => {
        speed = parseInt(e.target.value, 10);
    });
}

function moveCharacter(direction) {
    switch (direction) {
        case "up":
            y -= speed;
            character.style.top = y + "px";
            break;
        case "down":
            y += speed;
            character.style.top = y + "px";
            break;
        case "left":
            x -= speed;
            character.style.left = x + "px";
            break;
        case "right":
            x += speed;
            character.style.left = x + "px";
            break;
    }
}

upButton.onclick = () => moveCharacter("up");
downButton.onclick = () => moveCharacter("down");
leftButton.onclick = () => moveCharacter("left");
rightButton.onclick = () => moveCharacter("right");

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            moveCharacter("up");
            break;
        case "ArrowDown":
            moveCharacter("down");
            break;
        case "ArrowLeft":
            moveCharacter("left");
            break;
        case "ArrowRight":
            moveCharacter("right");
            break;
    }
});
