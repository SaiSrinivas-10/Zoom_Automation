function submittime(){
    var app=document.getElementById("app").value;
    var adat=document.getElementById('adat').value;
    var pcct=document.getElementById('pcct').value;
    var iott=document.getElementById('iott').value;
    var est=document.getElementById('est').value;
    var eht=document.getElementById('eht').value;

    var today = new Date();
    var minutes=('0' + (today.getMinutes())).slice(-2);
    var time = today.getHours() + ":" +minutes;
    document.getElementById('time').innerHTML=time;

    if(time == app){
        window.open("https://us04web.zoom.us/j/4296050648?pwd=Jlae9naKcOydobpLW3hI58UaMzcoj1.1");
        display();  
    }

    else if(time == adat){
        window.open("https://zoom.us/j/99513049276?pwd=Q3VyUW5sbXVCSGF5aEFjRGsxeXIrUT09");
        display();
    }
    else if(time == pcct){
        window.open("https://zoom.us/j/3848569137?pwd=ZTFtTmM3WndOcFR0YXhPYWEzSjlHUT09");
        display();
    }
    else if(time == iott){
        window.open("https://us04web.zoom.us/j/76580633198?pwd=R3NOZ3JMaWhaaUVIQlhuZnY2Zmk2dz09");
        display();
    }
    else if(time == est){
        window.open("https://us04web.zoom.us/j/6845247405?pwd=VXVHWWY4RGxVLzFSRzl6NjEzTWdJUT09");
        display();
    }
    else if(time == eht){
        window.open("https://us04web.zoom.us/j/79099639821?pwd=Nk40UkdEdjZnNC9aVWdxb3p6OHVuZz09");
        display();
    }

    else{
        document.getElementById('alert').innerHTML="No class now!"
        setTimeout(submittime, 60000);
    }
    
}

function display(){
        document.getElementById('alert').innerHTML="Joined class";       
        setTimeout(submittime,2700000);
}
