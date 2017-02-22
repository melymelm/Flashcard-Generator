var inquirer = require("inquirer");
var fs = require("fs");

var basicCard = require("./basic.js");
var clozeCard = require("./cloze.js");


startGame = function() {
    inquirer.prompt([
    {
        type: 'list',
        message: "How would you like to play today?",
        choices: ["Play Basic Cards", "Play Cloze Cards"],
        name: "play"
    }
    ]).then(function(response){
        switch (response.play) {
            // Play Flashcards
            case "Play Basic Cards":
	            basicCard();
	            break;
            // Play Clozecards
            case "Play Cloze Cards":
	            clozeCard();
	            break;         
        } 
    });
}

startGame();

var basicCard = function(basicFront, basicBack) {

	var getData = function(data) {
	    fs.readFile("basic.txt", "utf8", function(error, data){

	      console.log("Data from cards.txt:" + data);

			this.front = data.basicFront,
		    this.back = data.basicBack,
		    this.showFront = function() {
		        console.log("Question: " + this.front);
		      };
		    this.showBack = function() {
		        console.log("Answer: " + this.back);
		      };

        });
	};

getData();
startGame();

};

var clozeCard = function (clozeFront, clozeBack) {
    	var getData = function(data) {
	    fs.readFile("cloze.txt", "utf8", function(error, data){

	      console.log("Data from cards.txt:" + data);

			this.front = data.clozeFront,
		    this.back = data.clozeBack,
		    this.showFront = function() {
		        console.log("Question: " + this.front);
		      };
		    this.showBack = function() {
		        console.log("Answer: " + this.back);
		      };

        });
	};

getData();
startGame();
};