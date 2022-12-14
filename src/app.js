/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suit = ["♦", "♥", "♠", "♣"];
const number = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNumber = Math.floor(Math.random() * number.length);

  let colors =
    suit[randomSuit] === "♠" || suit[randomSuit] === "♣" ? "black" : "red";

  document.getElementById("addSuit1").style.color = colors;

  document.getElementById("addSuit2").style.color = colors;

  let suit1 = document.querySelector("#addSuit1");
  suit1.innerHTML = suit[randomSuit];

  let suit2 = document.querySelector("#addSuit2");
  suit2.innerHTML = suit[randomSuit];

  let number1 = document.querySelector("#addNumber");
  number1.innerHTML = number[randomNumber];
};

onload();
