let title = document.querySelector("h1"); // select the h1 in the DOM
let path = "./images/"; // image file path start
let diceOneChoice = Math.floor(Math.random() * 6) + 1; // picks a number 1 - 6
let diceTwoChoice = Math.floor(Math.random() * 6) + 1;
let diceImageOneSelection = "dice" + diceOneChoice + ".png"; // append random number
let diceImageTwoSelection = "dice" + diceTwoChoice + ".png";
let diceOneImage = document.querySelector(".img1");
let diceTwoImage = document.querySelector(".img2");

diceOneImage.src = path + diceImageOneSelection;
diceTwoImage.src = path + diceImageTwoSelection;

if (diceOneChoice > diceTwoChoice) {
  title.textContent = "Player One Wins!";
} else if (diceOneChoice < diceTwoChoice) {
  title.textContent = "Player Two Wins!";
} else if (diceOneChoice === diceTwoChoice) {
  title.textContent = "It's a Draw!";
}
