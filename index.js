let a =document.getElementsByClassName("play");
let song_Name={0:"Close Eyes",1:"Dandelions",2:"until i found you" ,3:"Pasoori"};
let audio=new Audio('/sounds/i.mp3');

document.getElementById('playBtn').addEventListener("click",()=>{
    if (document.getElementById('playBtn').getAttribute('src') == '/play-fill.svg'){
        document.getElementById('playBtn').src='/pause-circle.svg';
        audio.play();
        if (audio.getAttribute('src')=='/sounds/i.mp3'){
            document.getElementById('gif').style.visibility='hidden';
        }else{
            document.getElementById('gif').style.visibility='visible';
        }
    }else{
        document.getElementById('playBtn').src='/play-fill.svg';
        audio.pause();
        document.getElementById('gif').style.visibility='hidden';
       
    }
     
})
 
  
const makeAll=()=>{
    Array.from(a).forEach(element => {
        element.src='/play-fill.svg';
        audio.currentTime=0;
    });
}



for (let i=0 ; i<a.length ;i++){
    a[i].addEventListener("click",()=>{
        audio.setAttribute('src','/sounds/'+a[i].id+'.mp3');
        makeAll();
        if (a[i].getAttribute('src')=='/play-fill.svg'){
            a[i].src='/pause-circle.svg';
            document.getElementById('playBtn').src='/pause-circle.svg';
            audio.play();
            document.querySelector("#songName span").style.visibility='visible';
            document.querySelector("#songName span").innerHTML=song_Name[a[i].id];
            document.getElementById('gif').style.display='inline-block';
            document.getElementById('gif').style.visibility='visible';
        }
        
        let update=parseInt(a[i].id);
        document.getElementById("next").addEventListener("click",()=>{
            update++
            if (update<=a.length-1){
                audio.src="/sounds/"+update+".mp3"
                makeAll(); 
                document.getElementById(update).setAttribute('src','/pause-circle.svg')
                audio.play();
                document.getElementById('playBtn').src='/pause-circle.svg';
                document.querySelector("#songName span").style.visibility='visible';
                document.querySelector("#songName span").innerHTML=song_Name[update];
                document.getElementById('gif').style.display='inline-block';
                 
            }else{
                update=a.length-1
                audio.src="/sounds/"+update+".mp3"
                makeAll(); 
                document.getElementById(update).setAttribute('src','/pause-circle.svg')
                audio.play();
                document.getElementById('playBtn').src='/pause-circle.svg';
                document.querySelector("#songName span").style.visibility='visible';
                document.querySelector("#songName span").innerHTML=song_Name[update];
                document.getElementById('gif').style.display='inline-block';
                 
            }
        })
        
         
        document.getElementById("previous").addEventListener("click",()=>{
            update--
            if (update>=0){
                audio.src="/sounds/"+update+".mp3"
                makeAll(); 
                document.getElementById(update).setAttribute('src','/pause-circle.svg')
                audio.play();
                document.getElementById('playBtn').src='/pause-circle.svg';
                document.querySelector("#songName span").style.visibility='visible';
                document.querySelector("#songName span").innerHTML=song_Name[update];
                document.getElementById('gif').style.display='inline-block';
                
            }else{
                update=0
                audio.src="/sounds/"+update+".mp3"
                makeAll(); 
                document.getElementById(update).setAttribute('src','/pause-circle.svg')
                audio.play();
                document.getElementById('playBtn').src='/pause-circle.svg';
                document.querySelector("#songName span").style.visibility='visible';
                document.querySelector("#songName span").innerHTML=song_Name[update];
                document.getElementById('gif').style.display='inline-block';
                 
            }
        })
               
    })
     
}

audio.addEventListener('timeupdate',()=>{
    let progres=(audio.currentTime/audio.duration)*100;
    document.getElementById('tog').value=progres;
})

document.getElementById("tog").addEventListener("change",()=>{
    audio.currentTime=(document.getElementById("tog").value * audio.duration/100)
})


 