var reg=/^[A-Z]{1}[\u4e00-\u9fa5|A-z|0-9|_]{7,15}$/
form.onsubmit=function(e){
				var flag=true;

				if(txt.value.match(reg)){
					user.innerHTML='进入下一步'
					user.style.color='lime'
				}else{
					user.innerHTML='首字母大写,长度8-16  中英文数字，下划线'
					user.style.color='red'
					flag=false;
				}
				if(pass.value==''){
					pass1.innerHTML='请输入密码'
					pass1.style.color='red'
					flag=false;
				}else{
					pass1.innerHTML='进入下一步'
					pass1.style.color='lime'
					
					
				}

				if(flag){
					
				}else{
					e.preventDefault();
				}
			}


			txt.onblur=function(){
				if(txt.value.match(reg)){
					user.innerHTML='进入下一步'
					user.style.color='lime'
				}else{
					user.innerHTML='首字母大写,长度8-16  中英文数字，下划线'
					user.style.color='red'
					
				}
			}
