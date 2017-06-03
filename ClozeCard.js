
//This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;



// constructor used to create objects
// and ".displayText" properties
function ClozeCard(cloze, partial, fullText) {
  this.front = front;
  this.fronttext = fronttext;
  this.displayText = function() {
    if (this.front === true) {
      console.log(this.fronttext);
    }
  };
}

// sets the variables "basicFront" and "basicBack" to be Basic objects and initializes them with the side of the card (front or back) and text displayed
var firstPresident = new ClozeCard(true, "George Washington Who was the first president of the United States?");
var basicBack = new Basic(false, "George Washington");

// calling dogs and cats makeNoise methods
basicFront.displayText();
basicBack.displayText();

