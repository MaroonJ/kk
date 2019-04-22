$('.brands-tabs li').mouseenter(function(){
	var n=$(this).index()
	$('.hoverarr').css('left',`${242*n}px`)
});
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
$('.xzapp-pp').mouseenter(function(){
	$('.xzapp-pp-B').fadeIn(200)
});
$('.xzapp-pp').mouseleave(function(){
	$('.xzapp-pp-B').fadeOut(200)
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
