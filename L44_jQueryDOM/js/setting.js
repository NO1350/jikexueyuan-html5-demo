/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
   $("#btn1").click(function(){
      $("#p1").text("极客学院");
   });

	$("#btn2").click(function(){
	   $("#p2").html("<a href='http://www.jikexueyuan.com'>极客学院</a>");
	});

	$("#btn3").click(function(){
	   $("#i3").val("极客学院");
	});

	$("#btn4").click(function(){
	   $("#aid").attr({
		   "href":"http://www.jikexueyuan.com",
		   "title":"hello"
	   });
	});

	$("#btn5").click(function(){

	   $("#p5").text(function(i,ot){
	       return "old:"+ot+" new:这是新的内容"+(i);     /*回调*/
	   });
	});
});