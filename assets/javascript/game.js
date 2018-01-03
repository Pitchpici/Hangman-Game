    
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

    

    o.generateWord = function() {
      o.incorrectGuesses=[];
      o.emptyUnderscores=[];
      o.chances=13;
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


    o.thisIsGuess =function (guess) {
          var p=0;
          var r=0;
          
          for (var j=0; j<o.wordWork.length; j++){ //we check to see if the guessed letter is in the generated word
            if (o.wordWork[j]==guess) p++;
            console.log("p value is: " + p);
          }

          for (var k=0; k<o.incorrectGuesses.length; k++) { //we check to see if the guessed letter has been guessed before
              if (o.incorrectGuesses[k]==guess) r++; 
              console.log("this is r: " + r);}


          if (p>0) { // then I want to change all underscores with the letter
          
                  for (var i =0; i<o.wordWork.length; i++) {
                    if (o.wordWork[i]==guess) {
                      o.emptyUnderscores[i]=guess;
                    }
                  } 
          }        
          
          else if (r==0) {
                      o.chances -=1;
                      o.incorrectGuesses.push(guess);
                    }      
      

        document.getElementById("blank").innerHTML=o.emptyUnderscores.join("");
            console.log(o.emptyUnderscores);
        document.getElementById("incorrect").innerHTML=  o.incorrectGuesses.join("*");
            console.log(o.incorrectGuesses);
        document.getElementById("chances").innerHTML=o.chances;                

    } //closing thisIsGuess function

    o.check = function() {

                
              if (o.generatedWord==o.emptyUnderscores.join("")) // if the letters guessed complete the generated word
                {
                  o.wins++;
                  document.getElementById("wins").innerHTML=o.wins;
                  alert ("You guessed it!");
                  o.generateWord();
                }

              else if (o.chances===0) {
                 document.getElementById("incorrect").innerHTML="";
                 alert("You lost!");
                 o.generateWord();
              }
    }

      o.generateWord();
      document.onkeypress= function(event) { //when player presses key, the game begins
        
          var guess=String.fromCharCode(event.keyCode).toLowerCase();
          document.getElementById("guess").innerHTML="Your guess is " + guess;
          document.getElementById("incorrect").innerHTML="";
          o.thisIsGuess(guess);
          o.check();

      }

  }//close window onload function

