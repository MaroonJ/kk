$('.brands-tabs li').mouseenter(function(){
	var n=$(this).index()
	$('.hoverarr').css('left',`${242*n}px`)
})
$(function(){
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();
		if(scrolltop>=200){
			$("#elevator_item").show();
		}else{
			$("#elevator_item").hide();
		}
	});
	$("#elevator").click(function(){
		$("html,body").animate({scrollTop:0},500);
	});
	$(".qr").hover(function(){
		$(".qr-popup").show();
	},function(){
		$(".qr-popup").hide();
	});
});

$('.chao li').hover(function(){
	$(this).children('.heart').toggle();

});
$(window).scroll(function(){
	console.log($('.mainNav').offset().top)
	var w=($(window).scrollTop())
	var h=($(window).height())
	if(w>161){
		$('.mainNav').css({'position':'fixed','width':'1583px','left':'0px','top':'0px',})
	}else{
		$('.mainNav').css('position','relative')
	}
})
$('.m-left0').click(function(){
	$('.mid-h').children('.m-body0').toggle(250)
	
})
$('.m-left1').click(function(){
	$('.mid-h').children('.m-body1').toggle(250)
})
$('.m-left2').click(function(){
	$('.mid-h').children('.m-body2').toggle(250)
})
$('.m-left3').click(function(){
	$('.mid-h').children('.m-body3').toggle(250)
})
$('.m-left4').click(function(){
	$('.mid-h').children('.m-body4').toggle(250)
})
$('.m-left5').click(function(){
	$('.mid-h').children('.m-body5').toggle(250)
})
$('.m-left6').click(function(){
	$('.mid-h').children('.m-body6').toggle(250)
})
$('.m-left7').click(function(){
	$('.mid-h').children('.m-body7').toggle(250)
})
