window.onload = function(){
    if(window.innerWidth < 700 ){
        document.getElementById('img').setAttribute('class','col-12');
        document.body.style.backgroundImage = "url('../public/img/1-mobile.jpg')"; 
    }else{
        document.body.style.backgroundImage = "url('../public/img/1.jpg')"
    }
};