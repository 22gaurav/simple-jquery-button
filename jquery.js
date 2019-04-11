$(document).ready(function(){
	var offset=$("#btn").offset();
	$("#btn").mouseenter(function(e){

     var cursorX= e.pageX;
     var cursorY=e.pageY;

     var clickX=cursorX-offset.left;
     var clickY=cursorY-offset.top;

     $("#colo1").css({left:clickX,top:clickY,opacity:1});
     $("#colo2").css({left:clickX,top:clickY,opacity:.5});

     $("#colo1").animate({height:'300px',width:'300px'},800);
     $("#colo2").animate({height:'600px',width:'600px'},800);
	});
     $("#btn").mouseleave(function(e){
     var cursorX= e.pageX;
     var cursorY=e.pageY;

     var leaveX=cursorX-offset.left;
     var leaveY=cursorY-offset.top;

     $("#colo1").animate({height:'0px',width:'0px',left:leaveX,top:leaveY},600);
     $("#colo2").animate({height:'0px',width:'0px',left:leaveX,top:leaveY},600);
     });
});