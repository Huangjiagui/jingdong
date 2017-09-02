$(function(){
//--------左边悬停离开事件warp----
(function(){
	$('.nav_list').on('mouseover','li',function(i){
		$('.popup').eq($(this).index()).show();
		$('.popup').eq($(this).index()).siblings('.popup').hide();
		$(this).addClass('ac')
	})	
	$('.nav_list').on('mouseout','li',function(){
		$(this).removeClass('ac')
		$('.popup').hide();
	})
	$('.popup').hover(function(){
		$('.nav_list li').eq($(this).index()-1).addClass('ac');
		$(this).show();
	},function(){
		$('.nav_list li').eq($(this).index()-1).removeClass('ac')
		$(this).hide();
	})
})()	
////--------右边话费--------------------		
	var iconLi =$('.icon li').slice(0,4);
	var timer;
	iconLi.on('mouseenter',function(){
		var _this = $(this);	
		if($('.phone_list').hasClass('phoneac')){
		  timer = setTimeout(function(){
			iconLi.animate({"top":-40},300);
			$('.icon').find('.phone_list').stop().animate({'top':30},300).children('.phone').eq(_this.index()).show().siblings().hide();						
			iconLi.find('span').eq(_this.index()).addClass('ac').siblings().removeClass('ac');			
			$('.phone_list').removeClass('phoneac');
			},500)		
		}else{
			$('.icon').find('.phone_list').children('.phone').eq(_this.index()).show().siblings().hide();
			iconLi.find('span').removeClass('ac');
			iconLi.find('span').eq(_this.index()).addClass('ac');
		}									
	})	
	iconLi.on('mouseleave',function(){
		clearTimeout(timer)
		})
	
	$('.phone').find('span').on('click',function(){
		iconLi.animate({"top":0},200);
		$('.icon').find('.phone_list').animate({'top':208},300)
		$('.phone_list').addClass('phoneac');
		
		iconLi.find('span').removeClass('ac')
		
	})
//-----登录上面的二级菜单-?为什么不能用mouseenter和mouseleave--------------------------------------------
$('.h_inner').on('mouseover','.inner li',function(){
	
	if($(this).find('a').hasClass('active')){
		$(this).find('ul').show().parent().siblings().find('ul').hide();
	}
})
$('.h_inner').find('.inner li').on('mouseout',function(){
	$('.h_inner').find('.inner li').find('ul').hide();
}),
//-----右边回顶部的固定定位-------------------------------------------------------
(function(){
	function bodyrigh(obj){
		var timer;
		obj.hover(function(){
			var _this = $(this);
			timer=setTimeout(function(){
				_this.addClass('ac').find('span').stop().animate({'left':-70},200);
			},300)
		},function(){
			clearTimeout(timer);
			$(this).addClass('ac').find('span').stop().animate({'left':0},200);
		})
	}
	bodyrigh($('.bodyrigh .kehu li'))
	bodyrigh($('.bodyrigh .fankui li'))
	
})(),
//--轮播右边的新闻滚动---------------------------------------------------------
(function(){
	$('.news ul').append($('.news ul').html());
	var timer;
	function run(){
		timer = setInterval(function(){
			$('.news ul').animate({'top':-24},1000,function(){
				$(this).css("top",0).children('li').first().appendTo($(this));
			})
		},2000)
	}
	run();
	$('.news ul').hover(function(){clearInterval(timer)},function(){run()})
})(),

//-------------轮播图---------------------
$('.page1 .banner').imgTab({"time":2000})
	
$('.page1 .banner .leftBtn').hover(function(){$('.page1 .banner .leftBtn').addClass('ac');},function(){$('.page1 .banner .leftBtn').removeClass('ac')})
$('.page1 .banner .rightBtn').hover(function(){$('.page1 .banner .rightBtn').addClass('ac');},function(){$('.page1 .banner .rightBtn').removeClass('ac')})

//---------楼层滚动-----------------
$('.page3').sollBol($('.LocationFloorList'))
//--------返回顶部-----------------
$(document.body).backTop($('.fankui li:eq(0)'));
//--楼层图片转换--------------------------------------------------------
//	var page3List =date;
(function(){
//$.get("http://127.0.0.1:8020/myWork/Month1/黄家贵/jingdong/floorList.txt",function(date){
//	var page3List =new Array();
//	
//	 console.log(3333)
//	 console.log(date);
//	   page3List=date;
//	  console.log(page3List); 
	var lujing = "images/";
	var page3List=[ //楼层的数组
	
	[//第1楼的图片数据下标0
//		{
		[
		"574eba26Nb9bf8624.jpg",
		"574d9d76Nbad1d1fc.jpg",
		"574da515Nf00cda20.jpg", 
		"574daaf5N7c9e66ea.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"574da030N8ae34fa9.jpg",
		"574da012N600a9f98.jpg",
		"574da6b3N1a5785a8.jpg",
		"574d9ddcNa2acf967.jpg"
		],
//	},
	//男装索引下标1
//	{
		[
			"574da515Nf00cda20.jpg","574ea769Nd2d3fb26.jpg","574eba26Nb9bf8624.jpg","574d9da1N674d2b73.jpg",
			"574d9e4dN5a8d1351.jpg","574d9e23Nbc0f4c2e.jpg","574d9e38N99d8fc7f.jpg","574d9e62Nba5f0f92.jpg",
			"574d9e91N54c2790f.jpg","tupian_03.jpg"
		],
//	"mid3_pic1":"574da515Nf00cda20.jpg",
//	"mid3_pic2":"574ea769Nd2d3fb26.jpg",
//	"mid3_pic3":"574eba26Nb9bf8624.jpg", //中间3个图 可以用数组
//	"right3":["574d9da1N674d2b73.jpg",
//			"574d9e4dN5a8d1351.jpg",
//			"574d9e23Nbc0f4c2e.jpg",
//			"574d9e38N99d8fc7f.jpg",
//			"574d9e62Nba5f0f92.jpg",
//			"574d9e91N54c2790f.jpg",
//			"tupian_03.jpg"]
//	},
	//女装索引下标2
//	{
		[
		"574eba26Nb9bf8624.jpg",
		"574ea769Nd2d3fb26.jpg",
		"574da515Nf00cda20.jpg",//中间3个图 可以用数组
		"574d9da1N674d2b73.jpg",
		"574d9e23Nbc0f4c2e.jpg",
		"574da5a1N6721a1fb.jpg",
		"574d9e91N54c2790f.jpg",
		"574d9e38N99d8fc7f.jpg",
		"574d9e4dN5a8d1351.jpg",
		"574d9ddcNa2acf967.jpg"
		],
//	},
	//鞋靴索引下标3
//	{
		[
		"574da515Nf00cda20.jpg",
		"574d9d76Nbad1d1fc.jpg",
		"574eba26Nb9bf8624.jpg",//中间3个图 可以用数组
		"574d9ddcNa2acf967.jpg",
		"574d9da1N674d2b73.jpg",
		"574d9e62Nba5f0f92.jpg",
		"574d9e91N54c2790f.jpg",
		"574d9e62Nba5f0f92.jpg",
		"574d9e4dN5a8d1351.jpg",
		"tupian_03.jpg"
		],
//	},
	//箱包索引下标4
//	{
		[
		"574eba26Nb9bf8624.jpg",
		"574ea769Nd2d3fb26.jpg",
		"574da515Nf00cda20.jpg",//中间3个图 可以用数组
		"574d9e62Nba5f0f92.jpg",
		"574d9ddcNa2acf967.jpg",
		"574d9e91N54c2790f.jpg",
		"574d9ea7N40d10f19.jpg",
		"574da5a1N6721a1fb.jpg",
		"574da5b2N390899a2.jpg",
		"574d9ddcNa2acf967.jpg"
		],
//	},
	//内衣配饰索引下标5
//	{
		[
		"574da515Nf00cda20.jpg",
		"574ea769Nd2d3fb26.jpg",
		"574eba26Nb9bf8624.jpg", //中间3个图 可以用数组
		"574d9da1N674d2b73.jpg",
		"574da5b2N390899a2.jpg",
		"574da6b3N1a5785a8.jpg",
		"574da012N600a9f98.jpg",
		"574da030N8ae34fa9.jpg",
		"574d9e91N54c2790f.jpg",
		"tupian_03.jpg"
		],
//	},
	//珠宝首饰下标6
//	{
		[
		"574eba26Nb9bf8624.jpg",
		"574ea769Nd2d3fb26.jpg",
		"574da515Nf00cda20.jpg",//中间3个图 可以用数组
		"574d9da1N674d2b73.jpg",
		"574d9e23Nbc0f4c2e.jpg",
		"574da5a1N6721a1fb.jpg",
		"574d9e91N54c2790f.jpg",
		"574d9e38N99d8fc7f.jpg",
		"574d9e4dN5a8d1351.jpg",
		"574d9ddcNa2acf967.jpg"
		],
//	},
	//设施礼品下标7
//	{
		[
		"574da515Nf00cda20.jpg",
		"574d9d76Nbad1d1fc.jpg",
		"574eba26Nb9bf8624.jpg",//中间3个图 可以用数组
		"574d9ddcNa2acf967.jpg",
		"574d9e38N99d8fc7f.jpg",
		"574d9e62Nba5f0f92.jpg",
		"574d9e91N54c2790f.jpg",
		"574d9e62Nba5f0f92.jpg",
		"574d9ebfN816e4204.jpg",
		"tupian_03.jpg"
		],
//	},
	//腕表小标8
//	{
		[
		"574eba26Nb9bf8624.jpg",
		"574ea769Nd2d3fb26.jpg",
		"574da515Nf00cda20.jpg",
		"574d9e62Nba5f0f92.jpg",
		"574d9da1N674d2b73.jpg",
		"574d9e4dN5a8d1351.jpg",
		"574d9ea7N40d10f19.jpg",
		"574d9ebfN816e4204.jpg",
		"574d9ed7Ncebb60f3.jpg",
		"574d9ddcNa2acf967.jpg"
		]
//	}
	],
//第2楼的右边的图片数组	
	[
		[
		'574273a3N5cfefb1c.jpg',
		'5742b4fdN80bd4aa6.jpg',
		'574e35f5N79a12982.jpg',
		'574d457fNfc905c9c.jpg',
		"574fdd0aNbefd2063.jpg",
		"5747f54aN7392a550.jpg",
		"574e3aaeN20df0ce1.jpg",
		"574cf7bcN63c647ea.jpg" 
		],
		[
		'574273a3N5cfefb1c.jpg',
		'5742b4fdN80bd4aa6.jpg',
		"574fdd0aNbefd2063.jpg",
		"5747f54aN7392a550.jpg",
		"574e3aaeN20df0ce1.jpg",
		"574cf7bcN63c647ea.jpg", 
		'574e35f5N79a12982.jpg',
		'574d457fNfc905c9c.jpg'
		],
		[
		"57300116N732f715e.jpg",
		"574e7d70N9cfa3daa.jpg",
		"574e3aaeN20df0ce1.jpg",
		'574d457fNfc905c9c.jpg',
		'574e35f5N79a12982.jpg',
		"5747f54aN7392a550.jpg",
		"574fdd0aNbefd2063.jpg",
		"574cf7bcN63c647ea.jpg", 
		],
		[
		"574273a3N5cfefb1c.jpg",
		'5742b4fdN80bd4aa6.jpg',
		'574e35f5N79a12982.jpg',
		"574cf7bcN63c647ea.jpg", 
		"574fdd0aNbefd2063.jpg",
		'574d457fNfc905c9c.jpg',
		"574e3aaeN20df0ce1.jpg",
		"5747f54aN7392a550.jpg"
		],
		[
		"57300116N732f715e.jpg",
		"574e7d70N9cfa3daa.jpg",
		"574e3aaeN20df0ce1.jpg",
		'574cf7bcN63c647ea.jpg',
		'574e35f5N79a12982.jpg',
		"5747f54aN7392a550.jpg",
		"574fdd0aNbefd2063.jpg",
		"574d457fNfc905c9c.jpg", 
		],
		[
		'574273a3N5cfefb1c.jpg',
		'5742b4fdN80bd4aa6.jpg',
		"574fdd0aNbefd2063.jpg",
		"574d457fNfc905c9c.jpg",
		"574e3aaeN20df0ce1.jpg",
		"5747f54aN7392a550.jpg", 
		'574e35f5N79a12982.jpg',
		'574cf7bcN63c647ea.jpg'
		],
		[
		"574273a3N5cfefb1c.jpg",
		'5742b4fdN80bd4aa6.jpg',
		'574e3aaeN20df0ce1.jpg',
		"574cf7bcN63c647ea.jpg", 
		"574e3aaeN20df0ce1.jpg",
		'574d457fNfc905c9c.jpg',
		"574e35f5N79a12982.jpg",
		"574cf7bcN63c647ea.jpg"
		],
		[
		'574273a3N5cfefb1c.jpg',
		'5742b4fdN80bd4aa6.jpg',
		'574e35f5N79a12982.jpg',
		'574cf7bcN63c647ea.jpg',
		"574fdd0aNbefd2063.jpg",
		"5747f54aN7392a550.jpg",
		"574e3aaeN20df0ce1.jpg",
		"574d457fNfc905c9c.jpg" 
		],
		[
		"57300116N732f715e.jpg",
		"574e7d70N9cfa3daa.jpg",
		"574e3aaeN20df0ce1.jpg",
		'574cf7bcN63c647ea.jpg',
		'574e35f5N79a12982.jpg',
		"574d457fNfc905c9c.jpg",
		"574fdd0aNbefd2063.jpg",
		"5747f54aN7392a550.jpg", 
		]
	],
//3楼的图片数据	
	[
		[
		"574ea1f8N008ae707.jpg",
		"57427e84N7a639f59.jpg",
		"57341acbNf62e27d7.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"574da030N8ae34fa9.jpg",
		"574da6b3N1a5785a8.jpg",
		"574d9ddcNa2acf967.jpg"
		],
		[
		"574d442bNbb56bd8f.jpg",
		"57341acbNf62e27d7.jpg",
		"57427e84N7a639f59.jpg",
		"574da6b3N1a5785a8.jpg",
		"574da030N8ae34fa9.jpg",
		"57341acbNf62e27d7.jpg",
		"574da58cN2f318c97.jpg",
		"tupian_03.jpg"
		],
		[
		"574ea1f8N008ae707.jpg",
		"57427e84N7a639f59.jpg",
		"57341acbNf62e27d7.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"574da6b3N1a5785a8.jpg",
		"574da030N8ae34fa9.jpg",
		"574d9ddcNa2acf967.jpg"
		],
		[
		"574d442bNbb56bd8f.jpg",
		"57341acbNf62e27d7.jpg",
		"57427e84N7a639f59.jpg",
		"574da6b3N1a5785a8.jpg",
		"57341acbNf62e27d7.jpg",
		"574da030N8ae34fa9.jpg",
		"574da58cN2f318c97.jpg",
		"tupian_03.jpg"
		],
		[
		"574ea1f8N008ae707.jpg",
		"57341acbNf62e27d7.jpg",
		"57427e84N7a639f59.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"574da6b3N1a5785a8.jpg",
		"574da030N8ae34fa9.jpg",
		"574d9ddcNa2acf967.jpg"
		],
		[
		"574d442bNbb56bd8f.jpg",
		"57341acbNf62e27d7.jpg",
		"57427e84N7a639f59.jpg",
		"574da6b3N1a5785a8.jpg",
		"57341acbNf62e27d7.jpg",
		"574da030N8ae34fa9.jpg",
		"574da58cN2f318c97.jpg",
		"tupian_03.jpg"
		],
		[
		"574ea1f8N008ae707.jpg",
		"57341acbNf62e27d7.jpg",
		"57427e84N7a639f59.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"574da030N8ae34fa9.jpg",
		"574da6b3N1a5785a8.jpg",
		"574d9ddcNa2acf967.jpg"
		],
		[
		"574d442bNbb56bd8f.jpg",
		"57341acbNf62e27d7.jpg",
		"57341acbNf62e27d7.jpg",
		"574da6b3N1a5785a8.jpg",
		"574da030N8ae34fa9.jpg",
		"574da58cN2f318c97.jpg",
		"57341acbNf62e27d7.jpg",
		"tupian_03.jpg"
		],
		[
		"574ea1f8N008ae707.jpg",
		"57341acbNf62e27d7.jpg",
		"574da58cN2f318c97.jpg",
		"574da57aNac2872d2.jpg",
		"57427e84N7a639f59.jpg",
		"574da030N8ae34fa9.jpg",
		"574da6b3N1a5785a8.jpg",
		"574d9ddcNa2acf967.jpg"
		]	
	]
]



//第4楼 
	page3List.push(page3List[2])
//第5楼

	$('.page3').each(function(i){
		var _this = $(this);
		var n=i;
		$(this).find('.title li').hover(function(){
			var k = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			var rImg = _this.find('.page3right').find('img');
			rImg.each(function(i){
				rImg.eq(i).prop('src',lujing+page3List[n][k][i])
			})
	},function(){})
	})
	
//},"json")//AJXA	
	
})()
//})	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}) //$(function)的括号
