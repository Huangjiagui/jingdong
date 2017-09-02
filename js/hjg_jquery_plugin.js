//jQuery原型扩展方法
$.fn.extend({

	
//拖拽-----------------------------------------------------------------------------
	drag:function(title){  //title ：标题		
		this.each(function(){			
			title=title ||$(this);//拖拽部位的判断
			var _this=$(this);			
			title.mousedown(function(ev){
				var disX=ev.pageX-$(this).offset().left;
				var disY=ev.pageY-$(this).offset().top;
				
				$(document).mousemove(function(ev){
					//console.log(ev)	
					var l=ev.pageX-disX;
					var t=ev.pageY-disY;
					var s_w=$(window).width();
					var s_h=$(window).height();
					if(l<0){
						l=0
					};
					if(t<0){
						t=0
					};
					if(l>s_w-_this.outerWidth()){
						l=s_w-_this.outerWidth();
					};
					if(t>s_h-_this.outerHeight()){
						t=s_h-_this.outerHeight();
					};
					//最后赋值
					_this.css({"left":l,"top":t});
				});
				
				$(document).mouseup(function(){
					$(document).unbind("mousemove");
				});
				return false;  //阻止默认行为
			});
		});
		return this;
	},		
//showCenter 居中-------------------------------------------------------------------------------
	showCenter:function(){
		return this.each(function(){
			var _this=$(this);
			function run(){
				var s_w=$(window).width();
				var s_h=$(window).height();				
				var this_w=_this.outerWidth();
				var this_h=_this.outerHeight();				
				var l=(s_w-this_w)/2;
				var t=(s_h-this_h)/2;				
				_this.css({"left":l,"top":t});
			};
			run();
			//改变窗口大小事
			$(window).resize(run);
		});
	},		
//选项卡（轮播）------------------------------------------------------------------------------
	imgTab:function(opt){//opt:对象  autoPlay：  time		
		var def={
			"autoPlay":true,
			"time":1000
		};		
		var n_opt=$.extend(def,opt);				
		return this.each(function(){			
			var _this=$(this);		
			//找按钮
			var aBtn=_this.find("ol li");
			var imgLi=_this.find("ul li");			
			var i=0;			
			var timer;			
			aBtn.click(function(){
				var n=$(this).index();				
				i=n;
				$(this).addClass("ac").siblings().removeClass('ac');
				//切换图片
				imgLi.eq(n).fadeIn().siblings().hide();
			});
			//------------------------------
			//自动切换
			if(n_opt.autoPlay){
				
				function run(){
					timer=setInterval(function(){
					i==aBtn.length-1? i=0:i++;
					
						imgLi.eq(i).fadeIn().siblings().hide();
						aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
						
					},n_opt.time);
				};
				run();
				//鼠标移入  停止自动
				//鼠标移出 继续自动    //左右两边按钮
				_this.hover(
					function(){
						clearInterval(timer); 	$('.page1 .banner .leftBtn').show();$('.page1 .banner .rightBtn').show();//新加左右切换按钮
					$('.page1 .banner .leftBtn').off('click');
					$('.page1 .banner .rightBtn').off('click');;
					$('.page1 .banner .leftBtn').on('click',function(){
						i--;
						if(i<0){i=aBtn.length-1;}
						imgLi.eq(i).fadeIn().siblings().hide();
						aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
						
						console.log(i);return false;
					});$('.page1 .banner .rightBtn').on('click',function(){
						i++;
						if(i>aBtn.length-1){i=0}
						imgLi.eq(i).fadeIn().siblings().hide();
						aBtn.eq(i).addClass("ac").siblings().removeClass('ac');
						return false;
					})
					},
					function(){
						run();  $('.page1 .banner .leftBtn').hide();$('.page1 .banner .rightBtn').hide();//新加左右切换按钮
					}
				)
			}	
		});
	},
	
//checkAll全选单选	--------------------------------------------------------------------------------
	checkAll:function(opt){  //全选按钮调用 opt单选按钮的对象集合
		return this.each(function(){				
			var _this = $(this);
			var n = 0;
//------------全选全不选----------------------------------------				
			$(this).click(function(){			
				$(opt).each(function(i){
					
					if(_this.prop('checked')){
						console.log(_this)
						$(opt).eq(i).prop('checked',true);
						n=$(opt).length;
					}else{
						
						$(opt).eq(i).prop('checked',false);
						n=0;
					}
				})				
			})
//--------------单选----------------------------------------
			$(opt).click(function(){
				$(this).prop('checked')?n++:n--;
				if(n==$(opt).length){
					_this.prop('checked',true)
				}else{_this.prop('checked',false)}
			})
//----------------------		
		});		
	},
//------京东滚动条--------------------------------------------------------------------------------------
	sollBol:function(opt){ //楼层DIV调用  opt参数是ul对象（不是LI对象集合）
			var _this = $(this)
		return _this.each(function(i){
			$(window).scroll(function(){
				//获取滚动条的top：文档高度到body的高度 ..b变动的
				var s_t=$(window).scrollTop();//滚轮的高度
				
				if(s_t>_this.eq(0).offset().top-600){
					$(opt).show();
					$(opt).find('li').eq(0).addClass("ac");
				}else{
					$(opt).hide();
				}
				_this.each(function(i){
					var utop = $(this).offset().top-$(window).scrollTop();
					var litop = $(opt).children().eq(i).offset().top-$(window).scrollTop();
//					if(utop<litop){ 
					if(utop<$(window).height()/3){ // 3分支2
						_this.find('h3').removeClass('ac')  //标题的ac{background:red}变颜色
						$(this).find('h3').addClass('ac').siblings().removeClass('ac');
						$(opt).children().eq(i).addClass('ac').siblings().removeClass('ac');
						//li的ac {background:red}给li变颜色
					}else{$(this).find('h3').removeClass('ac')}
				})
			})	
			//点击li事件 指定滚动条跑的位子	
			$(opt).find('li').each(function(i,ele){
				$(this).click(function(){
				$("html,body").stop().animate({"scrollTop":_this.eq(i).offset().top+"px"},1000);
				});			
			})
		})
	},
//---返回顶部---------------------------------------------
	backTop:function(opt){
//这一条判断滚动条大于屏幕高度 显示opt
//			$(window).scroll(function(){	
//				if($(window).scrollTop()>1200){
//					$(opt).show();
//					console.log(321)
//				}else{
//					$(opt).hide();
//				}
//			});			

			$(opt).click(function(){
				$("html,body").animate({"scrollTop":0},1000);
//				$(this).hide();
			});
		},
//---放大镜------------------------------------------------------
	fandaJing:function(opt){
		return $(this).each(function(){
			var _this = $(this)
			var ospan = _this.find('span');
			_this.mousemove(function(ev){
				ospan.show();
				$(opt).show();
				var l = ev.pageX - $(this).offset().left - ospan.width()/2; //移动事件一般都要做计算，计算中心
				var t = ev.pageY -$(this).offset().top - ospan.height()/2;
				//判断---------------------------------------
				if(l<=0){l=0}
				if(t<=0){t=0}
				if(l>$(this).width()-ospan.width()){l=$(this).width()-ospan.width()}
				if(t>$(this).height()-ospan.height()){t=$(this).height()-ospan.height()}
				//ospan 设置left top
				ospan.css({"left":l,"top":t});
				//放大效果
				$(opt).find('img').css({"left":-l*$(opt).find('img').width()/_this.find('img').width(),"top":-t*$(opt).find('img').height()/_this.find('img').height()}) //比例要传
			})
			_this.mouseleave(function(ev){
				ospan.hide();
				$(opt).hide();
			})
			
		})
	},
//--一次性对象-女友带回家---——this指li--opt指带有放大镜的div---$('.data_top_galss')指放大效果的div------------------------
	hjgxuanTing:function(opt){
		return $(this).each(function(){
			var _this = $(this);		
			_this.on('mouseover',function(){
				$(opt).find('img').prop('src',$(this).find('img').prop('src'));
				$('.data_top_galss').find('img').prop('src',$(opt).find('img').prop('src'));
				_this.addClass('bot-Li').siblings().removeClass('bot-Li');
			})
		})
	}
	
	
}); //$.fn.extend的括号
//行5、拖拽    
//行44、DIV居中    
//行62、选项卡与轮播
//行111.单选多选按钮
//行141.滚动条事件
//行175.返回顶部