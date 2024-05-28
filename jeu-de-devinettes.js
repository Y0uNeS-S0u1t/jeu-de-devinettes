// Variables globales
let points = 0;
const maxAttempts = 5;
let attemptsLeft = maxAttempts;
const rewardPoints = 10;
const penaltyPoints = 5;

// Générer un nombre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Récupérer les éléments HTML nécessaires
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const pointsDisplay = document.getElementById('points');

// Fonction pour vérifier la conjecture
function checkGuess() {
    // Vérifier s'il reste des tentatives
    if (attemptsLeft === 0) {
        message.textContent = 'Vous avez utilisé toutes vos tentatives. Le nombre était ' + randomNumber + '.';
        return;
    }

    // Récupérer la conjecture de l'utilisateur
    const userGuess = parseInt(guessInput.value);

    // Vérifier si la conjecture est correcte
    if (userGuess === randomNumber) {
        message.textContent = 'Bravo! Vous avez deviné correctement!';
        points += rewardPoints;
        attemptsLeft = 0; // Pour terminer le jeu après une réponse correcte
    } else {
        message.textContent = userGuess < randomNumber ? 'Trop bas! Essayez encore.' : 'Trop haut! Essayez encore.';
        points -= penaltyPoints;
        attemptsLeft--;

        // Vérifier s'il reste des tentatives après la déduction
        if (attemptsLeft === 0) {
            message.textContent = 'Vous avez utilisé toutes vos tentatives. Le nombre était ' + randomNumber + '.';
        }
    }

    // Mettre à jour l'affichage des points
    pointsDisplay.textContent = points;

    // Effacer l'entrée utilisateur après chaque conjecture
    guessInput.value = '';
}
