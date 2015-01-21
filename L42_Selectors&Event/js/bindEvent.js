/**
 * Created by Crixalis on 2015/1/21.
 */
$(document).ready(function(){
	/*$("#clickMeBtn").click(function(){
		alert("hello");
	});*/
	$("#clickMeBtn").click("click",clickHander1);
	$("#clickMeBtn").click("click",clickHander2);
	//$("#clickMeBtn").unbind("click");
	$("#clickMeBtn").unbind("click",clickHander1);

	$("#clickMeBtn").on("click",clickHander1);
	$("#clickMeBtn").on("click",clickHander2);
	$("#clickMeBtn").off("click",clickHander1);//推荐on off 代替bind unbind


});

function clickHander1(e){
	console.log("clickHander1")
}
function clickHander2(e){
	console.log("clickHander2")
}
