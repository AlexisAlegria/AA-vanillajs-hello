/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var aleatorio = Math.floor(Math.random() * 4);
  console.log(
    (document.getElementById("excuse").innerHTML =
      who[aleatorio] +
      " " +
      action[aleatorio] +
      " " +
      what[aleatorio] +
      " " +
      when[aleatorio])
  );
};
