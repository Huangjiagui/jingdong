$(function(){
//放大镜	
//---左边图片悬停-放大-左右按钮点击事件----------------------------------
(function(){
	$('.data_top').fandaJing($('.data_top_galss')) //放大
	$('.suof li').hjgxuanTing($('.data_top')) //悬停
	$('.suof_l').on('click',function(){$('.suof').animate({"left":-61},1000);}) //左边三角形点击
	$('.suof_r').on('click',function(){$('.suof').animate({"left":0},1000);})  //右边按钮点击
})()
//---右边切换样式-------------------------------------------------
var xinxi=[99,188,1988,9999,8899,88];
	var pri; //价格
	var n=1; //数量
	//类型的点击切换变化
 	$('.centerbot .neixing li').on('click',function(i){
 		$(this).addClass('bot-Li').siblings().removeClass('bot-Li');
		$('.data_top').find('img').prop('src',$('.suof li').eq($(this).index()-1).find('img').prop('src'));
		$('.data_top_galss').find('img').prop('src',$('.data_top').find('img').prop('src'));
		$('.suof li').eq($(this).index()-1).addClass('bot-Li').siblings().removeClass('bot-Li');
		if($(this).index()-1==0){
			$('.suof').animate({"left":0},1000);
		}
		if($(this).index()==$('.centerbot .neixing li').length){
			$('.suof').animate({"left":-61},1000);
		}
		console.log($(this).index())
	//价格变化	
		$('.pz').find('span:eq(0)').html('<sub>￥</sub>'+parseFloat(xinxi[$(this).index()-1]).toFixed(2))
		pri = xinxi[$(this).index()-1];
		$('.sum').find('span').text( pri*n+'.00元')		
 	})		
 	//分期点击事件
 	$('.centerbot .fenqi li').on('click',function(i){
 		$(this).addClass('bot-Li').siblings().removeClass('bot-Li');
 	})
//--增减----------------------------------------------------------
		
		$('.ShoppingCart-box-ri').on('click',function(){
			$('.ShoppingCart-box-ght').prop('disabled',false);
			$('.ShoppingCart-box-ght').removeClass('ac');
			n++;
			$('.sum').find('span').text(pri*n+'.00元');
			$('.ShoppingCart-box-left').text(n);
		})
		$('.ShoppingCart-box-ght').on('click',function(){
			n--;
			if(n>1){
				$('.sum').find('span').text(pri*n+'.00元');
				$('.ShoppingCart-box-left').text(n);
			}else if(n==1){
				$('.sum').find('span').text(pri*n+'.00元');
				$('.ShoppingCart-box-left').text(n);
				$('.ShoppingCart-box-ght').addClass('ac');
				$('.ShoppingCart-box-ght').prop('disabled',true);
			}
			
			
		})
//--选项卡-----------------------------------------------------
	$('.Themanagertopspana').on('click',function(){$('.Themanagerbot').show().siblings().hide();
	$(this).addClass('ac').siblings().removeClass('ac')})
	$('.Themanagertopspanb').on('click',function(){$('.Themanagerbota2').show().siblings().hide();
	$(this).addClass('ac').siblings().removeClass('ac')})
})//$(function)的括号
