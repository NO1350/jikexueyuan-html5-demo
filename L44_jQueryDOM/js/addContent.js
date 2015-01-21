/**
 * Created by Crixalis on 2015/1/21.
 * append
 * prepend
 * before
 * after
 */
$(document).ready(function(){
   $("#btn1").click(function(){
      $("#p1").append("this is my web page add content,");
      $("#p1").prepend("this is my web page add content,");
   });
	$("#btn2").click(function(){
	   $("#p2").before("hey yo");
	   $("#p2").after("hey yo");
	});
});

function appendText(){
    /*
    * html,jQuery,DOM
    * */
	var text1="<p>crixalis</p>"
	var text2=$("<p></p>").text("klein");
	var text3=document.createElement("p");
	text3.innerHTML="sheepy";
	$("body").append(text1,text2,text3);
 }