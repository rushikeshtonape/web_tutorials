var playing = false;
var score;
var action;
var timeremaining;

var correctAns;

document.getElementById("startreset").onclick = function(){


   if(playing == true){  //if we are playing

     location.reload();
   
   }
   else{
    //change mode to playing  
     playing = true;


    //set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;

     //show countdown box
    show("timeremaining");

    //change button to reset
    document.getElementById("startreset").innerHTML = "Reset game";


    
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;

       //hide gameover box after restart game
       hide("gameover");


       startcountdown();

       //generate Q&A

       generateQA();

 
   }

}


                   
//if we click on answer box
    //if we are playing
        //correct
            //yes
                 //increase score
                 //show correct box for 1sec
                 //generate new Q&A
            //no
                 //show try again box for 1sec


for(i=1;i<5;i++){
     document.getElementById("box"+i).onclick = function(){

          if(playing == true){
    
              if(this.innerHTML ==correctAns){
    
                   //correct answer
                   score++;
                   document.getElementById("scorevalue").innerHTML = score;
    
                   //hide wrongbox and show correct box
                   hide("wrong");
                   show("correct");
                   setTimeout(function(){
    
                      hide("correct");
                   },1000);
    
                   generateQA();
    
              }else{
    
                   //hide correct box and show wrong box
                   hide("correct");
                   show("wrong");
                   setTimeout(function(){
                       hide("wrong");
                   },1000)
    
              }
              
    
    
          }
    
    
    
       }  
}

              
  // start counter               
function startcountdown(){
     action = setInterval(function(){
          timeremaining -= 1;
          document.getElementById("timeremainingvalue").innerHTML = timeremaining;
          if(timeremaining==0){  //game over
               stopcountdown();
               show("gameover");

               playing=false;
               

               document.getElementById("gameover").innerHTML = "<p>game over</p><p>your score is " + score + "</p>";


               hide("timeremaining");
               hide("correct");
               hide("wrong");

               document.getElementById("startreset").innerHTML = "Start game";

          }
      },1000);

    
}

// stop counter
function stopcountdown(){
     clearInterval(action);
    
}

// hide an element
function hide(Id){
     document.getElementById(Id).style.display = "none";
}


// hide an element

function show(Id){
     document.getElementById(Id).style.display = "block";
}

//generate Quation and multiple answers
function generateQA(){

     var x =  1+Math.round(9*Math.random());

     var y = 1+Math.round(9*Math.random());
     correctAns = x*y;
     // window.alert(correctAns);

     document.getElementById("question").innerHTML = x +"x"+y;

     var correctPos = 1+Math.round(3*Math.random());
     

     document.getElementById("box"+correctPos).innerHTML = correctAns;  //fill one box with the correct answer;

     // fill other boxes with wrong numbers

     var answers = [correctAns];

     for(i=1;i<5;i++){
          if(i != correctPos){
               var wrongAns;
               do{
                   
               wrongAns = 1+Math.round(9*Math.random()) * 1+Math.round(9*Math.random()); //a wrong answer

              

               }while(answers.indexOf(wrongAns)>-1)

     
               document.getElementById("box"+i).innerHTML = wrongAns;

               answers.push(wrongAns);
               
              

          }
          
     

     }

}


    



