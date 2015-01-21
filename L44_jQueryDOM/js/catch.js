/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
   $("#btn1").click(function(){
      alert("text:"+$("#text").text());
      alert("html:"+$("#text").html());/*html可获取内部子标签*/
   });
	$("#btn1").click(function(){
	   alert("text:"+$("#it").val());
	});

	$("#btn2").click(function(){
	   alert("text:"+$("#aid").attr("href"));
	   alert("text:"+$("#aid").attr("id"));
	});
});