const dateVar = new Date();
if(window.localStorage.getItem('token')&window.localStorage.getItem('token')>dateVar.getTime()){
    //user is verified
    console.log('verified')
    document.querySelector('.verifyContainer').remove()
    var ifr = document.createElement('iframe');
    document.body.appendChild(ifr);
    const d = new Date();
    var tokenLimit=d.getTime()+300000;
    window.localStorage.setItem('token', tokenLimit)
    ifr.src='https://glassyeargames.netlify.app?tok='+window.localStorage.getItem('token')
    ifr.style.border='none'
    ifr.style.height='100%'
    ifr.style.width='100%'
    ifr.style.position='absolute'


}else{
    //user is unverified
    console.log('unverified')
}

var interval1 = setInterval(() => {
    try{
    if(document.getElementById('decoyText').innerHTML.length>28){
        document.getElementById('decoyText').innerHTML=''
    }}catch{
        clearInterval(interval1)
    }
}, 10);
//document.querySelector('.verifyContainer').remove()
var letters = '';
document.addEventListener('keypress', function(e){
    letters = letters+e.key;
    console.log(letters)
    if(letters=='f') {
        document.getElementById('main').innerHTML='f';
        document.getElementById('decoyText').innerHTML='l';
    }
    else if(letters=='fi') {
        document.getElementById('main').innerHTML='fi';
        document.getElementById('decoyText').innerHTML='lo';
    }
    else if(letters=='fir') {
        document.getElementById('main').innerHTML='fir';
        document.getElementById('decoyText').innerHTML='lol';
    }
    else if(letters=='firs') {
        document.getElementById('main').innerHTML='firs';
        document.getElementById('decoyText').innerHTML='lolu';
    }
    else if(letters=='first') {
        document.getElementById('main').innerHTML='first';
        document.getElementById('decoyText').innerHTML='lolut';
    }
    else if(letters=='firstt') {
        document.getElementById('main').innerHTML='firstt';
        document.getElementById('decoyText').innerHTML='lolutr';
    }
    else if(letters=='firsttr') {
        document.getElementById('main').innerHTML='firsttr';
        document.getElementById('decoyText').innerHTML='lolutri';
    }
    else if(letters=='firsttry') {
        document.getElementById('main').innerHTML='firsttry';
        document.getElementById('decoyText').innerHTML='lolutrie';
    }
    else if(letters=='firsttryz') {
        document.getElementById('main').innerHTML='firsttryz';
        document.getElementById('decoyText').innerHTML='lolutried';
    }
    else{
        letters=document.getElementById('decoyText').innerHTML+e.key;
        document.getElementById('decoyText').innerHTML=letters;
        document.getElementById('main').innerHTML='';
    }


    //check
    if(document.getElementById('main').innerHTML=='firsttryz'){
console.log('success')
            //success
            var ifr = document.createElement('iframe');
            document.body.appendChild(ifr);
            const d = new Date();
            var tokenLimit=d.getTime()+300000;
            window.localStorage.setItem('token', tokenLimit)
            ifr.src='https://glassyeargames.netlify.app/?tok='+window.localStorage.getItem('token');
            ifr.style.border='none'
            ifr.style.height='100%'
            ifr.style.width='100%'
            ifr.style.position='absolute'





        document.getElementById('verifyLoadGif').style.display='block';
        setTimeout(() => {
            document.getElementById('verifyLoadGif').style.display='none';
            document.querySelector('.verifyContainer').remove()
        }, 2000);
        
    }else{
        document.getElementById('verifyLoadGif').style.display='block';
        setTimeout(() => {
            document.getElementById('verifyLoadGif').style.display='none';




        }, 1000);
    }
    
})

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);
