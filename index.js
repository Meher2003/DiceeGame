var dice1 = Math.floor(Math.random()*6 + 1);
document.getElementsByClassName("dice_img")[0].setAttribute("src", "images/dice" + dice1 + ".png");

var dice2 = Math.floor(Math.random()*6 + 1);
document.getElementsByClassName("dice_img")[1].setAttribute("src", "images/dice" + dice2 + ".png");

if(dice1>dice2){
  document.querySelector("h1").innerHTML="Player 1 Win🚩";
}
else if(dice1<dice2){
  document.querySelector("h1").innerHTML="Player 2 win🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!🎃";
}
