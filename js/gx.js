 //电子琴
   
 var hezuo=$(".hezuo").children();
    var audios = document.getElementsByTagName("audio");
    for (var i =0; i <hezuo.length; i++) {
       hezuo[i].className = "col2";
        hezuo[i].index = i;
        hezuo[i].onmouseover = function() {
            audios[this.index].load();
            audios[this.index].play();
        }
    }
     //手机归属地获取
    function gsd(neirong){
        $.ajax({
            type:"post",
            url:"http://route.showapi.com/6-1",
            dataType:"json",
            data:{
                showapi_appid:40581,
                showapi_sign:"033facf8721e40a69cab447dec929d33",
                num:neirong,

            },
            success:function(data){
                console.log(data.showapi_res_body);
                $(".wenzi").html(data.showapi_res_body.prov+":"+data.showapi_res_body.city+" "+data.showapi_res_body.name);//获取省市
                $(".neirong2").html("区号:"+data.showapi_res_body.areaCode+" 邮编：" +data.showapi_res_body.postCode);
            }
        })
    }
    tianqi()
    //天气戳
    function tianqi() {
        $.ajax({
            type: "post",
            url: "http://route.showapi.com/632-1",
            dataType: "json",
            data: {
                showapi_appid: 40582,
                showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"
            },
            success: function(data) {
                console.log(cities.length)
                console.log(data.showapi_res_body.city);
                for (var i = 0; i < cities.length; i++) {
                    if (cities[i].city == data.showapi_res_body.city) {
                        didian = (cities[i].cityid)
                    }
                };
                nihao(didian)
            }
        })
    };

    //天气
    $(".weather").click(function(){
         var name=prompt("请输入您城市名","");
             if(name)
    {
        var didian=""
     for (var i = 0; i < cities.length; i++) {
     if (cities[i].city == name) {
       didian = (cities[i].cityid)
       console.log(didian)
                    }
                };
                if(didian==""){
                    alert("你输入的地点有误")
                }else{
                    nihao(didian)
                }
     }
    })