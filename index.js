 
// MY WAY OF DOING IT

var a = Math.floor(Math.random() * 6) +1 ;

var b = Math.floor(Math.random() * 6) +1 ;

// first dice

if (a === 1)
{
   var one = document.querySelectorAll("img")[0];
   one.setAttribute("src", "images/dice1.png");
}
else if (a === 2)
{
   var two = document.querySelectorAll("img")[0];
   two.setAttribute("src", "images/dice2.png");
}
else if (a === 3)
{
   var three = document.querySelectorAll("img")[0];
   three.setAttribute("src", "images/dice3.png");
}
else if (a === 4)
{
   var four = document.querySelectorAll("img")[0];
   four.setAttribute("src", "images/dice4.png");
}
else if (a === 5)
{
  var five = document.querySelectorAll("img")[0];
   five.setAttribute("src", "images/dice5.png");
}
else if (a === 6)
{
   var six = document.querySelectorAll("img")[0];
   six.setAttribute("src", "images/dice6.png");
   }
//    else
//    {
//     var one = document.querySelectorAll("img")[0];
//     one.setAttribute("src", "images/dice1.png");
//    }
   

//    second dice

   if (b === 1)
{
   var one = document.querySelectorAll("img")[1];
   one.setAttribute("src", "images/dice1.png");
}
else if (b === 2)
{
   var two = document.querySelectorAll("img")[1];
   two.setAttribute("src", "images/dice2.png");
}
else if (b === 3)
{
   var three = document.querySelectorAll("img")[1];
   three.setAttribute("src", "images/dice3.png");
}
else if (b === 4)
{
   var four = document.querySelectorAll("img")[1];
   four.setAttribute("src", "images/dice4.png");
}
else if (b === 5)
{
  var five = document.querySelectorAll("img")[1];
   five.setAttribute("src", "images/dice5.png");
}
else if (b === 6)
{
   var six = document.querySelectorAll("img")[1];
   six.setAttribute("src", "images/dice6.png");
   }
   

// who wins
   if(a > b)
   {
   document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!";
   }
   else if(a < b)
   {
   document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩";
   }
   else 
   {
   document.querySelector("h1").innerHTML= "It's a draw!";
   }

// -----------------------------------------------------------------------------------------------



// ONE WAY OF DOING IT


// var a = Math.floor(Math.random() * 6) +1 ;
//     if (a === 1)
//     {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
// }
// if (a === 2)
// {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
// }
// if (a === 3)
// {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
// }
// if (a === 4)
// {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
// }
// if (a === 5)
// {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
// }
// if (a === 6)
// {
//    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
// }
// else
// {
//  var one = document.querySelectorAll("img")[0];
//  one.setAttribute("src", "images/dice1.png");
// }


// -------------------------------------------------------------------------------------------



// SHORT WAY

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }


