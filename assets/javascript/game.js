    
    window.onload= function () {
    o={};

    o.array=["judd", "mangold", "levitt", "stella", "schumann", "mccracken", "bell", "sandback"];

    o.generatedWord="";

    o.emptyUnderscores=[];

    o.incorrectGuesses=[];

    o.wordWork=[];

    o.chances=13;

    o.wins=0;
    document.getElementById("wins").innerHTML=o.wins;

    

    function generateWord() {
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
     
      console.log(o.emptyUnderscores); 
      document.getElementById("blank").innerHTML=o.emptyUnderscores.join(" ");
        
    }  


    function thisIsGuess (letter) {

          Array.prototype.multiIndexOf = function (el) { //this returns an array of indexes, where the guessed letter is in
            //the chosen word

              var idxs = [];
              for (var i = this.length - 1; i >= 0; i--) {
                  if (this[i] === el) {
                      idxs.unshift(i);
                  }
              }
              return idxs;
          }; //closing array.prototype function

          var p=o.wordWork.multiIndexOf(guess); //p is going to be my array of indexes - if (p[0]>-1) guess is correct 
          console.log("this is your array of indexes: "+ p);


          if (p[0]>-1) { // then I want to change all underscores with the letter
          
                  for (j = p.length - 1; j >= 0; j--) {

                    var k=p[j];
                    o.emptyUnderscores[k]=guess;
                  }

          document.getElementById("blank").innerHTML=o.emptyUnderscores.join("");
          document.getElementById("incorrect").innerHTML=  o.incorrectGuesses.join("*");
            console.log(o.incorrectGuesses);  
            console.log(o.emptyUnderscores);
            console.log(o.wordWork);
          }
          
          else {
            o.chances--;
            o.incorrectGuesses.push(guess);
          }  
    } //closing thisIsGuess function

    function check () {

              console.log(o.generatedWord==o.emptyUnderscores.join(""));
                
              if (o.generatedWord==o.emptyUnderscores.join("")) // if the letters guessed complete the generated word
                {
                  o.wins++;
                  document.getElementById("wins").innerHTML=o.wins;
                  alert ("winner");
                  generateWord();
                }

              else if (o.chances===0) {
                 document.getElementById("incorrect").innerHTML="";
                 generateWord();
              }
    }

      generateWord();
      document.onkeypress= function(event) { //when player presses key, the game begins
        
          var guess=String.fromCharCode(event.keyCode).toLowerCase();
          document.getElementById("guess").innerHTML="Your guess is " + guess;
          thisIsGuess();
          check();

      }

  }//close window onload function

