/**
 * Created by Crixalis on 2015/1/21.
 */
var ClickMeBtn;

$(document).ready(function(){
	ClickMeBtn=$("#clickMeBtn");
	ClickMeBtn.click(function(){
		var e=jQuery.Event("MyEvent");
		ClickMeBtn.trigger(e);
	});

	ClickMeBtn.bind("MyEvent",function(event){
		console.log(event);
	});
});