
	function getStyle(obj,style){
			if(getComputedStyle(obj)){
				return getComputedStyle(obj)[style];
			}
			else{
				return obj.currentStyle[style];	
			}
		}
	function animate(obj,json,callback){
			clearInterval(obj.timer);
			obj.timer=setInterval(
				function(){
				var isStop=true;	
				for(var attr in json){
					if(attr=='opacity'){
						var now=parseInt(getStyle(obj,attr)*100);
					}
					else{
						var now=parseInt(getStyle(obj,attr));
					}
					var speed=(json[attr]-now)/30;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(attr=='opacity'){
						obj.style[attr]=(now+speed)/100;
					}
					else{
						obj.style[attr]=now+speed+'px';
					}
					var current=now+speed;
					if(json[attr]!=current){
						isStop=false
					}
				}
				if(isStop){
					clearInterval(obj.timer);
					callback&&callback();
				}			
			},10);
		}
var r1=document.getElementsByClassName('r1')[0];
	var r2=document.getElementsByClassName('r2')[0];
	var r3=document.getElementsByClassName('r3')[0];
	var r4=document.getElementsByClassName('r4')[0];
	r1.onmouseover=function(){
		r1.style.right='-30px';
	}
	r2.onmouseover=function(){
		r2.style.right='-25px';
	}
	r3.onmouseover=function(){
		r3.style.right='-25px';
	}
	r4.onmouseover=function(){
		r4.style.right='-30px';
	}
	r1.onmouseout=function(){
		r1.style.right='-86px';
	}
	r2.onmouseout=function(){
		r2.style.right='-86px';
	}
	r3.onmouseout=function(){
		r3.style.right='-100px';
	}
	r4.onmouseout=function(){
		r4.style.right='-94px';
	}
	var slider=document.getElementsByClassName('slider')[0];
	var nav=document.getElementById('nav').children;
	var zixun=document.getElementsByClassName('zixun')[0];
	var flag=0;
	var index=1;
	function top1(){
		flag++;
		animate(zixun,{top:-30*flag},function(){
			if(flag==12){
				zixun.style.top="0px";
				flag=0;
			}
		});
		navChange();
	}
	
	function next(){
		index++;
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left="-800px";
				index=1;
			}
		});
		navChange();
	}
	function prev(){
		index--;
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left="-4800px";
				index=6;
			}
		});
		navChange();
	}
	var timer=setInterval(next,3000);
	var timer1=setInterval(top1,800);
	//鼠标划上时停止轮播，左右箭头淡入
	var box=document.getElementsByClassName('box')[0];
	var zi=document.getElementsByClassName('zi')[0];
	var right=document.getElementById('right1');
	var left=document.getElementById('left1');
	box.onmouseover=function(){
		clearInterval(timer);
		animate(left,{opacity:50})
		animate(right,{opacity:50})
	}
	zi.onmouseover=function(){
		clearInterval(timer1);
	}
	zi.onmouseout=function(){
		timer1=setInterval(top1,3000);
	}
	//鼠标划离时开始轮播，左右箭头淡出
	box.onmouseout=function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		timer=setInterval(next,3000);
	}
	//点击左右箭头，移动
	right.onclick=next;
	left.onclick=prev
	//点击小按钮，让slider找到指定位置
	
	for(var i=0;i<nav.length;i++){
		nav[i].idx=i;
		nav[i].onclick=function(){
			index=this.idx+1;
			animate(slider,{left:index*-800})
			navChange();
		}
	}
	function navChange(){
		for(var i=0;i<nav.length;i++){
			nav[i].className="";
		}
		if(index==7){
			nav[0].className='active';
		}
		else if(index==0){
			nav[5].className='active';
		}
		else{
			nav[index-1].className="active";
		}
	}
	window.onload=function(){
		var cover=document.getElementsByClassName('topp')[0];
		window.onscroll=function(){
			var st=document.documentElement.scrollTop||document.body.scrollTop;
			if(st>134){
				cover.style.position='fixed';
			}
			else{
				cover.style.position='static';
			}
		}
	}
	var np=document.getElementById('np');
	
	function GetSelect2(){	
    	for(var i=0;i<np.options.length;i++){
        	if(np.options[i].selected){
            	return np.options[i].value;
            	break;
        	}
    	}
    }
    
    np.onchange=function(){document.getElementById('money').innerHTML="￥"+GetSelect2();
	}