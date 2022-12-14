/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const iconos = ["♦", "♥", "♠", "♣"];

function randomIcon() {
  let test1 = Math.floor(Math.random() * iconos.length);
  return iconos[test1];
}

function randonNumber() {
  const numeros = [
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
  let test2 = Math.floor(Math.random() * numeros.length);
  return numeros[test2];
}

window.onload = () => {
  document.querySelector(".addIcon").innerHTML = randomIcon();
  document.querySelector(".addIcon2").innerHTML = randomIcon();
  document.querySelector(".addNumber").innerHTML = randonNumber();
};
