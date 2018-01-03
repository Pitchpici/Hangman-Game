    
    window.onload= function () {
    o={};

    o.array=["judd", "mangold", "levitt", "stella", "schumann", "mccracken", "bell", "sandback"];

    o.generatedWord="";

    o.emptyUnderscores=[];

    o.incorrectGuesses=[];

    o.wordWork=[];

    o.chances=0;

    o.wins=0;
    document.getElementById("wins").innerHTML=o.wins;

    

    o.generateWord = function() { //this function randomly picks an element from the array, creates two another arrays out of it, and links to html 
      o.incorrectGuesses=[]; //this is the array where we will save the guessed letters that are not in the randomly generated word
      o.emptyUnderscores=[]; //the empty array output to the screen
      o.chances=13; //reiterates the numbers of guesses available for the player, for each game
      document.getElementById("chances").innerHTML=o.chances; 

      o.generatedWord= o.array[Math.floor(Math.random()*o.array.length)];
      o.wordWork=o.generatedWord.split("");
      console.log(o.wordWork);

      for (var e=0; e<o.wordWork.length; e++) {
              o.emptyUnderscores.push("_ ");
        }
     
      console.log("this is goin to be in your HTML " + o.emptyUnderscores); 
      document.getElementById("blank").innerHTML=o.emptyUnderscores.join(" ");
        
    }  


    o.thisIsGuess =function (guess) { //once the player presses a key, we need to check if 1) it is in the generated word
          var p=0;                    //and 2) if not, it has already been pressed
          var r=0;
          
          for (var j=0; j<o.wordWork.length; j++){ //we check to see if the guessed letter is in the generated word
            if (o.wordWork[j]==guess) p++;
            console.log("p value is: " + p);
          }

          for (var k=0; k<o.incorrectGuesses.length; k++) { //we check to see if the guessed letter has been guessed before
              if (o.incorrectGuesses[k]==guess) r++; 
              console.log("this is r: " + r);}


          if (p>0) { // then I want to change all underscores with the found letter
          
                  for (var i =0; i<o.wordWork.length; i++) {
                    if (o.wordWork[i]==guess) {
                      o.emptyUnderscores[i]=guess;
                    }
                  } 
          }        
          
          else if (r==0) { //if the letter is not in the already pressed+incorrect keys, I want to include it, plus modify chances
                      o.chances -=1;
                      o.incorrectGuesses.push(guess);
                    }      
      //update HTML below

        document.getElementById("blank").innerHTML=o.emptyUnderscores.join(""); 
            console.log(o.emptyUnderscores);
        document.getElementById("incorrect").innerHTML=  o.incorrectGuesses.join("*");
            console.log(o.incorrectGuesses);
        document.getElementById("chances").innerHTML=o.chances;                

    } //closing thisIsGuess function

    o.check = function() { //if player guesses all the letters

                
              if (o.generatedWord==o.emptyUnderscores.join("")) // if the letters guessed complete the empty array so that it equals generated word
                {
                  o.wins++; //increase wins
                  document.getElementById("wins").innerHTML=o.wins; 
                  switch (o.generatedWord) { //output a picture of the guessed artist by using switch
                    case "judd": document.getElementById("pics").innerHTML= '<img src="assets/images/judd2.jpg" class="img-fluid">';
                    break;
                    case "mangold": document.getElementById("pics").innerHTML= '<img src="assets/images/mangold.jpg" class="img-fluid">';
                    break;
                    case "levitt": document.getElementById("pics").innerHTML= "<img src='assets/images/levitt.jpg' class='img-fluid'>";
                    break;
                    case "stella": document.getElementById("pics").innerHTML= '<img src="assets/images/stella.jpg" class="img-fluid">';
                    break;
                    case "schumann": document.getElementById("pics").innerHTML= '<img src="assets/images/schumann.jpg" class="img-fluid">';
                    break;
                    case "mccracken": document.getElementById("pics").innerHTML= '<img src="assets/images/mccracken.jpg" class="img-fluid">';
                    break;
                    case "sandback": document.getElementById("pics").innerHTML= '<img src="assets/images/sandback.jpg" class="img-fluid">';
                    break;
                    case "bell": document.getElementById("pics").innerHTML= '<img src="assets/images/bell.jpg" class="img-fluid">';
                    break;
                  }
                  alert ("You guessed it!");
                  o.generateWord(); //call function to generate another word

                }

              else if (o.chances===0) { //when playes exhausts chances, too bad!
                 document.getElementById("incorrect").innerHTML="";
                 alert("You lost!");
                 o.generateWord();

              }
    }

      o.generateWord(); // run function
      document.onkeypress= function(event) { //when player presses key, we save it, then run through the word array, then see if guessed it
        
          var guess=String.fromCharCode(event.keyCode).toLowerCase();
          document.getElementById("guess").innerHTML="Your guess is " + guess;
          document.getElementById("incorrect").innerHTML="";
          document.getElementById("pics").innerHTML="";
          o.thisIsGuess(guess);
          o.check();

      }

  }//close window onload function

