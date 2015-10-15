window.onload = function(){
    if(window.innerWidth < 700 ){
      image = document.getElementById('img');
      image.setAttribute('class','col-12')
    }
    
    setTimeout(function(){
      menu = document.getElementById('menuButton');
      menu.setAttribute('class','box-small boxhover col-3 middle animated fadeIn');
      menu.innerHTML='Menu';
    },2000);
};