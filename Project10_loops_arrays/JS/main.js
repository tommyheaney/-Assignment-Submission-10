//Counting Script while Loop
function count_To_Ten() {
  var Digit = "";
  var X = 1;
  while (X < 11) {
    Digit += "<br>" + X;
    X++;
  }
  document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//Instruments Script for Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y; 
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Cats Script Array
function cat_pics() {
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";
  document.getElementById("Cat").innerHTML = "In this picture the Cat is " +
      Cat_Picture[2] + ".";
}