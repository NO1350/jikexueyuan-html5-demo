/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
	$("button").click(function(){
		//$("p").text("p元素被修改了");
		$("#pid").text("通过id选择器p元素被修改了");
		$(".pclass").text("通过class选择器p元素被修改了");

	});
});