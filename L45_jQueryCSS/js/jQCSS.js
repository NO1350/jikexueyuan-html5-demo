/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
   /*$("div").css("width","100px");
   $("div").css("height","100px");
   $("div").css("background","red");*/
	/*$("div").css({
		width:"100px",height:"100px",backgroundColor:"#00FF00"
	});*/
	$("div").addClass("style1"); /*加载css样式*/
	$("div").click(function(){
	   //$(this).addClass("style2");
	   //$(this).removeClass("style1");
		$(this).toggleClass("style2");
	});
});