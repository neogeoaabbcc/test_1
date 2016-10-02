
window.onload =function(){
	//图片瀑布流剧中
	photo("photograph","div","section");
    //鼠标点击#nav-toggle事件
    mouseNav();
}

    function mouseNav(){
        var nav = document.getElementById("nav-toggle");
        var header = document.getElementById("header");
        var ul = document.getElementById("header-ul");
        const VAL = 462;         
        var headW = header.clientWidth;
        console.log(headW);
        addNav(ul,"click",function(){
            if(headW<=VAL){
                if(ul.style.display != "none"){
                ul.style.display = "none";
                }
            }  
        });
        addNav(nav,"click",function(){
        	if(ul.style.display != "block"){
        		ul.style.display = "block";
        	}else{
        		ul.style.display = "none";
        	} 
        });
    }
//绑定事件兼容
function addNav(element,type,handler){
    if(element.addEventListener){//检测是否为DOM2级方法
        element.addEventListener(type, handler, false);
    }else if (element.attachEvent){//检测是否为IE级方法
        element.attachEvent("on" + type, handler);
    } else {//检测是否为DOM0级方法
        element["on" + type] = handler;
    }
}
    
    function photo(photo,div,section){
	    var photograph = document.getElementById(photo);  
        var section = document.getElementById(section);
        var sectionW = section.offsetWidth;
        var photographW = photograph.offsetWidth;
        var photoW = photograph.getElementsByTagName(div);
        var arrH = [];
        function getMinNum(arr,val){
	        for(var i in arr){
		        if(arr[i] == val){
			        return i;
		        }
	        }
        }
        var photoCenter = function(){
        	for(var i=0;i<photoW.length;i++){
	            var width = photoW[i].offsetWidth;
	            var height = photoW[i].offsetHeight;
	            var cols = Math.floor(photographW / width);
	            /*水平居中（计算出每行div的数量）*/
	            photograph.style.left = sectionW /2 + "px";
	            photograph.style.marginLeft = -(width * cols) / 2 + "px";
	            //位置自适
	           if(i<cols){
                   arrH.push(height);   
	           }else{
	           	   var minH = Math.min.apply(null,arrH);
                   var index = getMinNum(arrH,minH);
                   photoW[i].style.position = "absolute";
                   photoW[i].style.top=minH + "px";
                   photoW[i].style.left=photoW[index].offsetLeft + "px";
                   arrH[index] += photoW[i].offsetHeight;          
	           }
            }
        }
        return photoCenter();
    }

    


