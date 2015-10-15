window.onload = function(){
    if(window.innerWidth < 700 ){
      document.getElementById('img').setAttribute('class','col-12');
      document.body.style.backgroundImage = "url('../img/1-mobile.jpg')"; 
    }else{
      document.body.style.backgroundImage = "url('../img/1.jpg')"    
    }
    
    if(window.location.pathname == '/'){
    
        setTimeout(function(){
          var menu = document.getElementById('menuButton');
          if(window.innerWidth < 700 ){
            menu.setAttribute('class','box boxhover col-6 middle animated fadeIn');  
          }else{    
            menu.setAttribute('class','box boxhover col-3 middle animated fadeIn'); 
          }
          menu.innerHTML='Menu';
        },2000);
    }
};