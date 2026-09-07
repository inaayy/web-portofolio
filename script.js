let gameScore = 0;
let gameTime = 20;
let gameTimer;

function startCoinGame() {
    gameScore = 0;
    gameTime = 20;

    document.getElementById("gameScore").textContent = gameScore;
    document.getElementById("gameTime").textContent = gameTime;

    document.getElementById("coin").style.display = "block";

    moveCoin();

    clearInterval(gameTimer);

    gameTimer = setInterval(function() {
        gameTime--;

        document.getElementById("gameTime").textContent = gameTime;

        if (gameTime <= 0) {
            clearInterval(gameTimer);
            document.getElementById("coin").style.display = "none";

            alert("🎮 Game selesai! Skor kamu: " + gameScore);
        }
    }, 1000);
}

function catchCoin() {
    gameScore++;
    document.getElementById("gameScore").textContent = gameScore;
    moveCoin();
}

function moveCoin() {
    let box = document.getElementById("gameBox");
    let coin = document.getElementById("coin");

    let x = Math.random() * (box.clientWidth - 60);
    let y = Math.random() * (box.clientHeight - 60);

    coin.style.left = x + "px";
    coin.style.top = y + "px";
}