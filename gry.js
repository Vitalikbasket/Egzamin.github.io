document.addEventListener('DOMContentLoaded', () => {
    function createCoin() {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = Math.random() * 100 + 'vw'; // Losowa pozycja pozioma
        coin.style.animationDuration = Math.random() * 2 + 3 + 's'; // Losowy czas trwania animacji
        document.body.appendChild(coin); // Dodaj monetę do body
        coin.addEventListener('animationend', () => {
            coin.remove(); // Usuń monetę po zakończeniu animacji
        });
    }

    setInterval(createCoin, 500); // Twórz monetę co 500ms
});
