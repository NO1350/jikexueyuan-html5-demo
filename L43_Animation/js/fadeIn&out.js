/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
	$("#fadeIn").on("click",function(){
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(1000);
		$("#div3").fadeIn(1000);
	});
	$("#fadeOut").on("click",function(){
		$("#div1").fadeOut(1000);
		$("#div2").fadeOut(1000);
		$("#div3").fadeOut(1000);
	});
	$("#fadeToggle").on("click",function(){
		$("#div1").fadeToggle(1000);
		$("#div2").fadeToggle(1000);
		$("#div3").fadeToggle(1000);
	});
	$("#fadeTo").on("click",function(){
		$("#div1").fadeTo(1000,0);
		$("#div2").fadeTo(1000,0.5);
		$("#div3").fadeTo(1000,1);
	});
});