up=0;
bp=0;

// rock = 0 paper = 1 scissors = 2

function check(n){

    bo = Math.floor(Math.random() * 3);

    // Rock start 
    if(n==0){

        if(bo==1){
            bp+=1;
            document.getElementById('bpoint').innerHTML=bp;
            document.getElementById('result').innerHTML="Too bad. Bot choose paper";           
        }

        else if(bo==2){
            up+=1;
            document.getElementById('upoint').innerHTML=up;
            document.getElementById('result').innerHTML="You got a point";
        }
        
        else{
            document.getElementById('result').innerHTML="It is a tie";
        }
    }

    // Rock end 
    // Paper start 

    else if(n==1){

        if(bo==2){
            bp+=1;
            document.getElementById('bpoint').innerHTML=bp;
            document.getElementById('result').innerHTML="Too bad. Bot choose scissors";
        }

        else if(bo==0){
            up+=1;
            document.getElementById('upoint').innerHTML=up;
            document.getElementById('result').innerHTML="You got a point";
        }
        
        else{
            document.getElementById('result').innerHTML="It is a tie";
        }
    }

    // Paper end 

    // scissor start

    else{

        if(bo==0){
            bp+=1;
            document.getElementById('bpoint').innerHTML=bp;
            document.getElementById('result').innerHTML="Too bad. Bot choose rock";
        }

        else if(bo==1){
            up+=1;
            document.getElementById('upoint').innerHTML=up;
            document.getElementById('result').innerHTML="You got a point";
        }
        
        else{
            document.getElementById('result').innerHTML="It is a tie";
        }

    }

    // Scissors end 
    // Checking the winner 

    if(bp==3){
        document.getElementById('finalresult').innerHTML="Better luck next time, Bot won";
        document.getElementById('tryagain').style.display="block";
        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissor').disabled=true;
    }

   else if(up==3){
        document.getElementById('finalresult').innerHTML="Congratulations! You won.";
        document.getElementById('tryagain').style.display="block";
        document.getElementById('rock').disabled=true;
        document.getElementById('paper').disabled=true;
        document.getElementById('scissor').disabled=true;
    }

    if(bp>3 || up >3){
        refresh();
    }


}


function refresh(){
    window.location.reload();
}