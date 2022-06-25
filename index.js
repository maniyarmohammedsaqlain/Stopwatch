    const minutes=document.getElementById("minutes")
    const seconds=document.getElementById("seconds")
    const hours= document.getElementById("hours")
    const minutes2=document.getElementById("minutes2")
    const start=document.getElementById("btn")
    const stoep=document.getElementById("btn2")
    const reset=document.getElementById("btn3")
    let time;
    let ref;
    let ref2;
    let ref3;
    let ref4;
    function timer(){
        sss=0;
        ref=setInterval(()=>{
            seconds.innerHTML=`${sss}`
            sss++;
            if(sss>99){
                sss=0;
                sss++;
                seconds.innerHTML=`${sss}`
             }
        },1)
        ss=1;
        ref2=setInterval(()=>{
            minutes.innerHTML=`${ss}`
            ss++;
            if(ss>60){
                ss=0;
                
                minutes.innerHTML=`${ss}`
              
                ss++;
                
            }
        },1000)
        s=0;
        ref3=setInterval(()=>{
            minutes2.innerHTML=`${s}`
            s++;
        },60000)

    }
    function stop(){
        clearInterval(ref)
        clearInterval(ref2)
        clearInterval(ref3)
    }
    function resetTimer(){
        clearInterval(ref)
        clearInterval(ref2)
        clearInterval(ref3)
        minutes.innerText="00"
        minutes2.innerText="00"
        seconds.innerText="00"
    }
    

