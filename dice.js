//mycode

var x1 = Math.floor(Math.random()*6)+1;
var x2 = Math.floor(Math.random()*6)+1;
/*
if(x1==1){
    document.getElementsByTagName("img")[0].src="images/dice1.png";
} else if(x1==2){
    document.getElementsByTagName("img")[0].src="images/dice2.png";
} else if(x1==3){
    document.getElementsByTagName("img")[0].src="images/dice3.png";
} else if(x1==4){
    document.getElementsByTagName("img")[0].src="images/dice4.png";
} else if(x1==5){
    document.getElementsByTagName("img")[0].src="images/dice5.png";
} else if(x1==6){
    document.getElementsByTagName("img")[0].src="images/dice6.png";
}


if(x2==1){
    document.getElementsByTagName("img")[1].src="images/dice1.png";
} else if(x2==2){
    document.getElementsByTagName("img")[1].src="images/dice2.png";
} else if(x2==3){
    document.getElementsByTagName("img")[1].src="images/dice3.png";
} else if(x2==4){
    document.getElementsByTagName("img")[1].src="images/dice4.png";
} else if(x2==5){
    document.getElementsByTagName("img")[1].src="images/dice5.png";
} else if(x2==6){
    document.getElementsByTagName("img")[1].src="images/dice6.png";
}

if(x1>x2){
    document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins";
} else if(x1<x2){
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins 🚩";
} else if(x1==x2){
    document.getElementsByTagName("h1")[0].textContent = "🏳️ Draw! 🏳️";
} */

//angelas code
var randomDiceImg = "dice"+x1+".png";
var randomImgSrc = "images/"+randomDiceImg;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);

var randomImgSrc2 = "images/dice"+x2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);

if(x1>x2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins";
} else if(x1<x2){
    document.querySelector("h1").textContent = "Player 2 Wins 🚩";
} else if(x1==x2){
    document.querySelector("h1").textContent = "🏳️ Draw! 🏳️";
}


