/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
	$("button").click(function(){
		/*$("p").hide(1000,function(){
			alert("动画结束，这个方法被称为回调");
		});*/
		$("p").css("color","red").slideUp(2000).slideDown(2000);
	});
});

