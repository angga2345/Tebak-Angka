// Generate angka acak dari 1 hingga 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);

    if (isNaN(guess) || guess < 1 || guess > 1000) {
        document.getElementById('message').innerText = 'Masukkan angka dari 1 hingga 1000';
    } else {
        attempts++;

        if (guess === targetNumber) {
            document.getElementById('message').innerText = `Tebakan Anda benar! Anda berhasil menebak angka ${targetNumber} dalam ${attempts} percobaan.`;
            document.getElementById('message').style.color = 'green';
            document.getElementById('guessInput').disabled = true;
        } else if (guess < targetNumber) {
            document.getElementById('message').innerText = 'Angka terlalu kecil! Coba lagi.';
            document.getElementById('message').style.color = 'red';
        } else {
            document.getElementById('message').innerText = 'Angka terlalu besar! Coba lagi.';
            document.getElementById('message').style.color = 'red';
        }
    }
}
