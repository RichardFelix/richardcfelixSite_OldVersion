window.onload = function(){
    if(window.innerWidth < 700 ){
        document.getElementById('img').setAttribute('class','col-12');
        document.body.style.backgroundImage = "url('../public/img/1-mobile.jpg')"; 
    }else{
        document.body.style.backgroundImage = "url('../public/img/1.jpg')"
    }
};

//function thankYou(){
//    console.log('greta');
//    document.getElementById('name').style.opacity = 0;
//    document.getElementById('email').style.opacity = 0;
//    document.getElementById('message').style.opacity = 0;
//    document.getElementById('submit').style.opacity = 0;
//    document.getElementById('thankYou').style.opacity = 1; 
//}
//
//function checkFilled() {
//    
//	var filled = 0
//	var x = document.form1.name.value;
//	x = x.replace(/^\s+/,"");
//	if (x.length > 0) {filled ++}
//	
//	var y = document.form1.email.value;
//	y = y.replace(/^\s+/,""); 
//	if (y.length > 0) {filled ++}
//	
//	var z = document.form1.message.value;
//	z = z.replace(/^\s+/,""); 
//	if (z.length > 0) {filled ++}
//	
//	if (filled == 3) {
//		document.getElementById("submit").disabled = false;
//	}
//	else{
//		document.getElementById("submit").disabled = true
//	}  
//}
