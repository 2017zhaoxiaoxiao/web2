var i2=document.getElementById('i2');
		var i3=document.getElementById('i3');
		var bigtu=document.getElementsByClassName('bigtu')[0];

		i3.onclick=function(){
			bigtu.setAttribute('src','../img/pp1.jpeg');
			i3.style.border="2px solid #ff9003";
			i2.style.border='2px solid #ffffff';
		}
		i2.onclick=function(){
			bigtu.setAttribute('src','../img/pp0.jpeg');
			i2.style.border="2px solid #ff9003";
			i3.style.border='2px solid #ffffff';
			
		}
		var hanliang1=document.getElementsByClassName('hanliang1')[0];
		var hanliang2=document.getElementsByClassName('hanliang2')[0];
		var pp14=document.getElementsByClassName('pp14')[0];
		var nn1=document.getElementsByClassName('nn1')[0];
		var nn2=document.getElementsByClassName('nn2')[0];

		hanliang2.onclick=function(){
			pp14.innerHTML="200ml";
			hanliang2.style.border="1px solid #ff0754";
			hanliang1.style.border='1px solid #ffffff';
			nn1.style.display="none";
			nn2.style.display="block";
			
		}
		hanliang1.onclick=function(){
			pp14.innerHTML="150ml";
			hanliang1.style.border="1px solid #ff0754";
			hanliang2.style.border='1px solid #ffffff';
			nn2.style.display="none";
			nn1.style.display="block";

		}
		var btna=document.getElementById('btna');
		var btnc=document.getElementById('btnc');
		var btnb=document.getElementById('btnb');
		btna.onclick =function(){
			var a=btnb.getAttribute('value');
			if(a==1){
				btna.style.cursor='not-allowed'
				
			}
			else{
				btnb.setAttribute('value',--a);
			}
		}
		btnc.onclick =function(){
			var a=btnb.getAttribute('value');
			btnb.setAttribute('value',++a);
			
		}
		var jaigou=document.getElementById('jiagou');
		var goumai=document.getElementById('goumai');
		var ss=document.getElementById('ss');
		var ee=document.getElementById('ee');
		jiagou.onclick=function(){
			ee.style.display="block";
			ee.style.opacity="0.6";
			ss.style.display='block';

		}
		var ss2=document.getElementById('ss2');
		ss2.onclick=function(){
			ee.style.display="none";
			ss.style.display="none";
			ee.style.opacity="1";

		}
		var ss1=document.getElementById('ss1');
		ss1.onclick=function(){
			ee.style.display="none";
			ss.style.display="none";
			ee.style.opacity="1";

		}
		var w3=document.getElementsByClassName('w3')[0];
		var img1=document.getElementById('img1');
		var img2=document.getElementById('img2');
		var slider=document.getElementById('slider');
		var Bimg=document.getElementById('Bimg');
		var box=document.getElementById('box');
		img1.onmouseover=function(){
			slider.style.display='block';
			img2.style.display='block';
			
			
		}
		img1.onmouseout=function(){
			slider.style.display='none';
			img2.style.display='none';
			
		}
		img1.onmousemove=function(ev){
			var ol=ev.clientX-box.offsetLeft-slider.offsetWidth/2;
			var ot=ev.clientY-box.offsetTop-slider.offsetHeight/2;
			
			var omaxw=img1.offsetWidth-slider.offsetWidth;
			var omaxh=img1.offsetHeight-slider.offsetHeight;
			ol=ol>omaxw?omaxw:ol<0?0:ol;
			ot=ot>omaxh?omaxh:ot<0?0:ot;
			slider.style.left=ol+"px";
			slider.style.top=ot+"px";
			var scale=Bimg.offsetHeight/img1.offsetHeight;
			Bimg.style.left=-ol*scale+"px";
			Bimg.style.top=-ot*scale+"px";
		}
