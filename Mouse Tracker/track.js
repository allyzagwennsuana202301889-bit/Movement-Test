const coordDiv = document.getElementById('coordinates');

    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
      coordDiv.textContent = `X: ${x}, Y: ${y}`;
    });

const button = document.getElementById('btn');

    button.addEventListener('click', () => {
    interact.textContent = "You clicked the button!";
    });

    button.addEventListener('mouseenter', () => {
    interact.textContent = "You hovered the button!";
});

const pressedElement = document.getElementById("pressed");

document.addEventListener("keydown", (event) => {
  pressedElement.textContent = `Pressed: ${event.key}`;
});
