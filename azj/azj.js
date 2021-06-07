function submittime(){
    var cosmt=document.getElementById("cosmt").value;
    var ost=document.getElementById('ost').value;
    var dccnt=document.getElementById('dccnt').value;
    var javat=document.getElementById('javat').value;
    var befat=document.getElementById('befat').value;

    var today = new Date();
    var minutes=('0' + (today.getMinutes())).slice(-2);
    var time = today.getHours() + ":" +minutes;
    document.getElementById('time').innerHTML=time;

     if(time == cosmt){
        window.open("https://zoom.us/j/3244357754?pwd=a0Rnc1o1Y3JUNkxYQzVqclpzMTVXdz09");
        display();  
    }

    else if(time == ost){
        window.open("https://zoom.us/j/97390893253?pwd=ZWZHYTNlTG1FZGlpQmd2K3JwTXNkdz09");
        display();
    }
    else if(time == dccnt){
        window.open("https://us02web.zoom.us/j/89707462170?pwd=Q2syaXArQnIvdndiajRHcUVHUFpNUT09");
        display();
    }
    else if(time == javat){
        window.open("https://us04web.zoom.us/j/76609044278?pwd=alk1R3NqSmYzQWxGS2tja0w2c0FmUT09");
        display();
    }
    else if(time == befat){
        window.open("https://us04web.zoom.us/j/9899817766?pwd=WlZqL3NJZGhRSy83T1dKMDRkNkM0UT09");
        display();
    }
    
    else{
        document.getElementById('alert').innerHTML="No class now!"
        setTimeout(submittime, 60000);
    }
    
}

function display(){
        document.getElementById('alert').innerHTML="Joined class";       
        setTimeout(submittime,2400000);
}
