
const randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

const randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// const url = `dice${randomNumber}.png`;

const randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; //inner muda o dentro do elemento html
} else if (randomNumber1 < randomNumber2){                     // no caso o texto do h1
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}