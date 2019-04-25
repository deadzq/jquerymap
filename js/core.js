$(function () {

	$.ajax({
		url: "http://127.0.0.1:8020/map/map2/jquerymap/json/china.json",
		type: "get",
		success: function (data) {
			console.log(data);
		}

	})

	$.getJSON( "json/china.json" ).done(function ( response ) {

		jsMap.config( "#map-01", response );

		jsMap.config( "#map-02", response, {
			areaName: {
				show: true
			}
		});

		jsMap.config( "#map-03", response, {
			multiple: true
		});
		$( "#get-multiple-1" ).on("click", function () {
			console.log( jsMap.multipleValue( "#map-03" ) );
		})
		$( "#get-multiple-2" ).on("click", function () {
			console.log( jsMap.multipleValue( "#map-03" , { type: "object" } ) );
		})

		jsMap.config( "#map-04", response, {
			stroke: {
				width: 2,
				color: "#000"
			}
		});

		jsMap.config( "#map-05", response, {
			fill: {
                basicColor: "#259200",
                hoverColor: "#57cb00",
                clickColor: "#2e6f18"
            }
		});

		jsMap.config( "#map-06", response, {
			fill: {
                basicColor: {
                    heilongjiang: "#ff5900",
                    jilin: "#19bb00",
                    liaoning: "#6800ff"
                },
                hoverColor: {
                    heilongjiang: "#ff8c4e",
                    jilin: "#1fe000",
                    liaoning: "#954dff"
                },
                clickColor: {
                    heilongjiang: "#c94600",
                    jilin: "#159a00",
                    liaoning: "#5200c9"
                }
            }
		});

		jsMap.config( "#map-07", response, {
			disabled: {
				name: [ "heilongjiang", "jilin", "liaoning" ]
			}
		});

		jsMap.config( "#map-08", response, {
			disabled: {
				name: [ "heilongjiang", "jilin", "liaoning" ],
				except: true
			}
		});

		jsMap.config( "#map-09", response, {
			tip: function ( id, name ) {
				if (name == "新疆") {
					$(".aa").show();	
 					//return '<div style="background:#eee;padding:15px; width: 200px;"><p>id: ' + id + '</p><p>name: ' + name + '</p></div>';
				} else {
					$(".aa").hide();
				}

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
           },
           areaName: {
                show: true
        	}
 
		});

		var $hoverCallback = $( "#hover-callback" );
		jsMap.config( "#map-10", response, {
			hoverCallback: function ( id, name ) {
				$hoverCallback.text( id + " --- " + name );
			}
		});

		var $clickCallback = $( "#click-callback" );
		jsMap.config( "#map-11", response, {
			clickCallback: function ( id, name ) {
				$clickCallback.text( id + " --- " + name );
			}
		});

	})

})



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
    }  
}
  document.body.onmousemove=function(event){  
    var div = document.getElementById("id");  
	var x=event.clientX;  
    var y=event.clientY;  
    var divx1 = div.offsetLeft;  
    var divy1 = div.offsetTop;  
    var divx2 = div.offsetLeft + div.offsetWidth;  
    var divy2 = div.offsetTop + div.offsetHeight;    
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){  
        //如果离开，则执行。。  
//      div.style.display = "none"
        
        
    }  
}