const target = document.getElementById('target');
const gameArea = document.getElementById('gameArea');

function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
}

target.addEventListener('click', () => {
    moveTarget();
});

moveTarget(); // Inicializa o alvo na posição aleatória