/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
   $(window).on("load",function(){
	imgLocation();
   });
});

function imgLocation(){
    var box=$(".box");
	var boxWidth=box.eq(0).width(); /*获取第一张图片的宽度 */
	var num=Math.floor($(window).width()/boxWidth);  /*计算一排摆放多少张图片*/
	var boxArr=[]; /*获取一排图片的高度*/
	box.each(function(index,value){
		//console.log("index: "+index+"-----"+"value: "+value);
		var boxHeight=box.eq(index).height();
		if(index<num){
		   boxArr[index]=boxHeight;
			console.log(boxHeight);
		}else{
			var minboxHeight=Math.min.apply(null,boxArr);
			//console.log(minboxHeight);
			var minboxIndex= $.inArray(minboxHeight,boxArr);
			console.log(minboxIndex);
			//console.log(value);
			$(value).css({
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex]+=box.eq(index).height();
		}
	});
}