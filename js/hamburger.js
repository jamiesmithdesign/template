$(document).ready(function(){

	var navList = $('.site-nav ul');
 
 $('.nav-icon').on('click',function(){
 	// console.log('clicked');
 	navList.slideToggle();
 });

$(window).on('resize' , function(){
		console.log('resizing')

	if($(window).width() >640){
		navList.show();
		console.log($(window).width());
	} else {
		navList.hide();

	}

});

});