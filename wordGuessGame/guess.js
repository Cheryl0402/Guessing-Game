     /**********************************/
     /* CS22A - Summer 2018            */
     /* HW5: Word Guessing Game        */
     /* Student Name: Yi Chen          */
     /* SID: 20324241                  */
     /**********************************/

     var game = new Dictionary();

     /* Constructor for the class Dictionary */
     function Dictionary() {
         this.words = ["nexus", "fire", "iphone", "droid", "erikson", "motorola", "blackberry", "nokia"];
         this.chosenWord = "";
         this.guessWord = "";
     }

     /* The newWord method returns a randomly selected word from Dictionary */
     Dictionary.prototype.newWord = function() {
         var randIndex = Math.ceil(Math.random() * (this.words.length - 1));
         this.chosenWord = this.words[randIndex].toLowerCase();
         return this.chosenWord;
     }

     /* Set guessWord variable */
     Dictionary.prototype.setGuessWord = function(word) {
         this.guessWord = word;
     }

     /* The chosenWord's getter method */
     Object.defineProperty(Dictionary.prototype, "chosenWord", {
         get: function() { return this.newWord(); }
     });

     /* The guessWord's getter method */
     Object.defineProperty(Dictionary.prototype, "guessWord", {
         get: function() { return this.guessWord; }
     });

     /* Pick a new word for a new game */
     function newGame() {
         var selectedWord = game.newWord();
         var str = "";
         for (var i = 0; i < selectedWord.length; i++) {
             str += "-";
         }
         game.setGuessWord(str);
         dashes = document.getElementById("dashes");
         dashes.innerHTML = game.guessWord;
         document.getElementById("guessButton").disabled = '';
     }


     /*  Guess a letter */
     function guessLetter() {
         inputLetter = document.getElementById("user_guess_input").value;
         prompt = document.getElementById("prompt");

         var numMatches = 0;
         for (var i = 0; i < game.chosenWord.length; i++) {
             var currentLetter = game.chosenWord.charAt(i);
             if (inputLetter == currentLetter) {
                 if (game.guessWord.charAt(i) == inputLetter) {
                     prompt.innerHTML = "You've already found this letter; there are no more!";
                     document.getElementById("user_guess_input").value = '';
                     return
                 } else {
                     updateGuessWord = game.guessWord.substring(0, i) + inputLetter + game.guessWord.substring(i + 1, game.guessWord.length);
                     game.setGuessWord(updateGuessWord);
                     document.getElementById("dashes").innerHTML = game.guessWord;
                     numMatches++;
                 }
             }
         }

         if (numMatches > 0) {
             prompt.innerHTML = "There are " + numMatches + " ' " + inputLetter + " '(s) found";
             document.getElementById("user_guess_input").value = '';

             if (!game.guessWord.includes("-")) {
                 prompt.innerHTML = "Congratulations! You successfully guessed '" + game.chosenWord + "'.";
                 document.getElementById("guessButton").disabled = 'disabled';
             }
         } else {
             prompt.innerHTML = "Sorry, your guessed letter does not exist in this word";
             document.getElementById("user_guess_input").value = '';
         }
     }