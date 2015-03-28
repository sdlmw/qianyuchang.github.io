$(function() {
	// body...
	$.fn.scrollPath("getPath")
	.moveTo(400, 50, {name: "start"})
	.lineTo(400, 1000, {name: "baseInfo"})
	.lineTo(400,1900,{name: "hobby"});


	$(".wrapper").scrollPath({drawPath: false, wrapAround: true});
})