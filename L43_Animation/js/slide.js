/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
	$("#flipShow").click(function(){
		$("#content").slideDown(1000);
	});
	$("#flipHide").click(function(){
		$("#content").slideUp(1000);
	});
	$("#flipToggle").click(function(){
		$("#content").slideToggle(1000);
	});
});