

// constructor used to create objects
// and ".displayText" properties
function Basic(front, fronttext) {
  this.front = front;
  this.fronttext = fronttext;
  this.displayText = function() {
    if (this.front === true) {
      console.log(this.fronttext);
    }
  };
}

// sets the variables "basicFront" and "basicBack" to be Basic objects and initializes them with the side of the card (front or back) and text displayed
var basicFront = new Basic(true, "Who was the first president of the United States?");
var basicBack = new Basic(false, "George Washington");

// calling dogs and cats makeNoise methods
basicFront.displayText();
basicBack.displayText();




//how to do this?????? This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;