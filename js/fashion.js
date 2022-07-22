$(document).ready(function(){

 //햄버거 아이콘 클릭시
 $("header button").click(function(){
	 $("nav").stop().slideToggle("fast", function(){
		 if($("nav").css("display")=="block"){
			 $("header button").text("close");
		 }
		 else {
			 $("header button").text("menu");
		 }
	 });
 });
 
 //메뉴 항목 클릭시
 $("nav a").click(function(){
	 $("nav").stop().slideUp();
	  $("header button").text("menu");
 });



});////////////끝