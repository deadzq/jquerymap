$(function () {
	
	
	$.ajax({
		type:"post",
		url:"http://www.chinacarbon-al.com/news/getLimitNews",
		async:false,
		data: {
			page: 1,
			rows: 4,
			section: 1
		},
		success: function (data) {
			
		}
	});
	$.getJSON( "json/china.json" ).done(function ( response ) {

		
		
		
		



		
		

		
		

		jsMap.config( "#map-09", response, {
			tip: function ( id, name ) {
//				if (name == "新疆") {
//					$(".aa").show();	
// 					//return '<div style="background:#eee;padding:15px; width: 200px;"><p>id: ' + id + '</p><p>name: ' + name + '</p></div>';
//				} else {
//					$(".aa").hide();
//				}

           	},
           	//配置线条颜色
            stroke:{
                 width: 1,
                 color: "white"
        	},
        	// 修改 fill 属性来自定义填充色 / 悬浮色 / 点击色
        	fill: {
                //basicColor: "#259200",
                //hoverColor: "#57cb00",
                //clickColor: "#2e6f18"
                  basicColor: "skyblue",
                  hoverColor: "skyblue",
                  clickColor: "skyblue"
           },
           areaName: {
                //show: true
        	}
 
		});

		
		
		
		

	})

})



 $(function () {
 	document.getElementById("id").onmouseout=function(event){  
    var div = document.getElementById("id");  
	var x=event.clientX;  
    var y=event.clientY;  
    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;    
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
        //如果离开，则执行。。  
        div.style.display = "none"
	$(".mask").hide()        
        
    }  
}
 document.getElementById("id").onmouseup=function(event){  
    var div = document.getElementById("id");  
	var x=event.clientX;  
    var y=event.clientY;  
    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;    
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
        //如果离开，则执行。。  
        div.style.display = "none"
	$(".mask").hide()        
    }  
}

  
$(".aaa").hover(function () {
	$(".aa2").show();
	$(".mask").show()
	$(".aa1").hide();
	
}, function () {
//	$(".aa").hide();
})
$(".aaa1").hover(function () {
	$(".aa1").show();
	$(".mask").show()
	$(".aa2").hide();
	
}, function () {
//	$(".aa").hide();
})


document.getElementById("id1").onmouseout=function(event){  
	
    var div = document.getElementById("id1");  
	var x=event.clientX;  
    var y=event.clientY;  

    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;    
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
        //如果离开，则执行。。  
        div.style.display = "none"
	$(".mask").hide()        
        
    }  
}
 document.getElementById("id1").onmouseup=function(event){  

    var div = document.getElementById("id1");  
	var x=event.clientX;  
    var y=event.clientY;  

    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
        //如果离开，则执行。。  
        div.style.display = "none"
		$(".mask").hide()        
    }  
}
 
 
 
  document.getElementById("id1").onmousemove=function(event){  

    var div = document.getElementById("id1");  
	var x=event.clientX;  
    var y=event.clientY;  
	console.log(x, y)
    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;
    
    //358, 329
    
    setInterval(() => {
    	if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
	        //如果离开，则执行。。  
	        div.style.display = "none"
			$(".mask").hide()        
		}  
    }, 20)
}
 
 

 })
