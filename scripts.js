jQuery('document').ready(funtion($){
 var menuBtn=$('.menu-icon'),
 menu=$('.navegacion ul');
 menuBtn.click(funcion(){
 	if (menu.hasClass('show')) {
 		menu.removeClass('show');
 	}else {
 	menu.addClass('show');
 }
 });
});