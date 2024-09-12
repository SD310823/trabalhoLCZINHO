document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const resultParagraph = document.getElementById('result');

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    submitButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            resultParagraph.textContent = 'Por favor, insira um filme entre janeiro e setembro.';
        } else if (userGuess < randomNumber) {
            resultParagraph.textContent = 'muito longe! Tente novamente.';
        } else if (userGuess > randomNumber) {
            resultParagraph.textContent = 'Muito perto! Tente novamente.';
        } else {
            resultParagraph.textContent = `Parabéns! Você acertou o filme ${randomNumber} em ${attempts} tentativas.`;
        }

        guessInput.value = '';
    });
});
