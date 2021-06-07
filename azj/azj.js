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
        window.open("https://us04web.zoom.us/j/77311135015?pwd=VWN3bnJPT1pET1FFUEw0SERUcGgrdz09");
        display();
    }
    else if(time == dccnt){
        window.open("https://zoom.us/j/3848569137?pwd=ZTFtTmM3WndOcFR0YXhPYWEzSjlHUT09");
        display();
    }
    else if(time == javat){
        window.open("https://us04web.zoom.us/j/76580633198?pwd=R3NOZ3JMaWhaaUVIQlhuZnY2Zmk2dz09");
        display();
    }
    else if(time == befat){
        window.open("https://us04web.zoom.us/j/6845247405?pwd=VXVHWWY4RGxVLzFSRzl6NjEzTWdJUT09");
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