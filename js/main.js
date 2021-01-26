let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

let body=document.querySelector('body');

if(isMobile.any()){
	body.classList.add('touch');
	let header__mobile-link=document.querySelectorAll('.arrow');
	for(i=0; i<header__mobile-link.length; i++){
	let header__mobile-list=header__mobile-link[i].nextElementSibling;
	let thisArrow=header__mobile-link[i];
	header__mobile-link[i].addEventListener('click', function(){
			header__mobile-list.classList.toggle('open');
			header__mobile-link.classList.toggle('active');
		});
	}	
	}else{
		body.classList.add('mouse');
	}
