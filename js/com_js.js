/**
 * Created by 96114 on 2017/2/11.
 */
var kdmUrl = "http://shop.koudaimiao.com"
//除去空格
function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}
//判断电话号码
var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
var phonetest = function (data) {
    var phone = data;
    if (reg.test(phone)) {
        return true
    } else {
        return false
    }
}

//判断手机端
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//超连接
$("body").on("tap", ".link", function () {
    var link = $(this).attr("data-link");
    console.log(link)
    if (link == "yijieshu") {
        kdm.toast("活动已结束");
        return false;
    }
    if (link == "yiqiangguang") {
        kdm.toast("商品已抢完");
        return false;
    }
    if (link == "weikaishi") {
        kdm.toast("活动暂未开始");
        return false;
    }
    if (link == "") {
        $(".jiushuzhezhao").show();
        return false;
    }
    //  if (link == "/FmShop/Find/index.html") {
    //     location.href = "/Shop/Personcenter/weikaifang" 
    //     return false;
    // }
    // if (link == "/fmshop/find/index.html") {
    //     location.href = "/Shop/Personcenter/weikaifang" 
    //     return false;
    // }
    if (link == "#") {
        kdm.toast("暂未开放");
        return false;
    } else {
        window.location.href = link;
    }
})


function changHtml(str) {
    var elem = document.createElement('div')
    elem.innerHTML = str
    return elem.innerText || elem.textContent
}

// 底部导航自动添加
var menu=    "<div class='index_bottom_mune'>"+
        "<div class='index_bottom_mune_rect  link' data-link='/group'>"+
            "<div class='index_bottom_mune_img'>"+
                "<span class='menuimg'>"+
                    "<img src='/Public/module/common/images/shouye_1.png'>"+
                "</span>"+
                "<span class='menutitle'>商城首页</span>"+
            "</div>"+
        "</div>"+
        "<div class='index_bottom_mune_rect  link' data-link='/Catcoin/index/cointask'>"+
            "<div class='index_bottom_mune_img'>"+
                "<span class='menuimg'>"+
                    "<img style='margin-left: 3px' src='/Public/module/common/images/miaobi_1.png'>"+
                "</span>"+
                "<span class='menutitle' style='margin-left: 2px'>喵币</span>"+
            "</div>"+
        "</div>"+
        "<div class='index_bottom_mune_rect link' data-link='/shop/Beautifulious/index1.html'>"+
            "<div class='index_bottom_mune_img'>"+
                "<span class='menuimg'>"+
                    "<img src='/Public/module/common/images/baitiao_1.png'>"+
                "</span>"+
                "<span class='menutitle'>白条</span>"+
            "</div>"+
        "</div>"+
        "<div class='index_bottom_mune_rect link' data-link='/FmShop/Find/index.html'>"+
            "<div class='index_bottom_mune_img'>"+
                "<span class='menuimg'>"+
                    "<img src='/Public/module/common/images/faxian_1.png'>"+
                "</span>"+
                "<span class='menutitle'>发现</span>"+
            "</div>"+
        "</div>"+
        "<div class='index_bottom_mune_rect link' data-link='/shop/personcenter/newpersoncenter'>"+
            "<div class='index_bottom_mune_img'>"+
                "<span class='menuimg'>"+
                    "<img src='/Public/module/common/images/wode_1.png'>"+
                "</span>"+
                "<span class='menutitle'>个人中心</span>"+
            "</div>"+
        "</div>"+
    "</div>";
/**    
 * Created by 96114 on 2017/2/11.
 */
//提示框
var style = "position: fixed;bottom: 60px;width: 60%;height: 40px; border-radius: 5px;background: rgba(0,0,0,.75);color: white;left: 20%;line-height: 40px;text-align: center;font-size: 12px;z-index:-100;display: none;opacity: 0;"
//等待加载
var loading = "<div class='kdm_loading'><div id='loading'><div class='spinner'><div class='spinner-container container1'><div class='circle1'></div>" +
    "<div class='circle2'></div>" +
    "<div class='circle3'></div>" +
    "<div class='circle4'></div>" +
    "</div>" +
    "<div class='spinner-container container2'>" +
    "<div class='circle1'></div>" +
    "<div class='circle2'></div>" +
    "<div class='circle3'></div>" +
    "<div class='circle4'></div>" +
    "</div>" +
    "<div class='spinner-container container3'>" +
    "<div class='circle1'></div>" +
    "<div class='circle2'></div>" +
    "<div class='circle3'></div>" +
    "<div class='circle4'></div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>"

var login = "<div class='l_zhezhaologin'>" +
    "   <form action='' id='l_loginrect'>" +
    "   <!--<div class='l_logo'>-->" +
    "   <img class='kdm_loginbg' src='/Public/module/common/loginbg.png'>" +
    "   <!--</div>-->" +
    "   <div class='l_rect'>" +
    "   <div class='l_list'>" +
    "   <div class='l_left'>" +
    "   <span class='login icon-linkman'></span>" +
    "   </div>" +
    "   <div class='l_right'>" +
    "   <input type='text' id='kdm_phone' placeholder='请输入手机号码'>" +
    "   <div id='code' data-state='1'>获取验证码</div>" +
    "   </div>" +
    "   </div>" +
    "   <div class='l_list'>" +
    "   <div class='l_left'>" +
    "   <span class='login icon-mm'></span>" +
    "   </div>" +
    "   <div class='l_right'>" +
    "   <input type='number' id='yzm' placeholder='请输入验证码'>" +
    "   </div>" +
    "   </div>" +
    "   <div class='l_button' id='telphonesave'>确认登录</div><div class='kdm_tishi'><div>为了确保您顺利获得产品" +
    "   </div><div>请绑定手机并保持畅通~</div></div>" +
    "</div>" +
    "</form>" +
    "</div>"

var kdm_guanzhu = '<div id="kdm_guanzhu"><div class="kdm_close"><span></span></div><div class="kdm_jiaguanzhu"></div></div>'
var kdm = {
      // 用户确认取消弹框提示
    confirm: function (obj) {
        $('body').append("<div id='confirm'>" +
            "<div class='popBox'>" +
            "<span class='xCross' id='xCross'>×</span>" +
            "<div class='bgPic'>" +
            "<img id='confImg' src='" + obj.img + "'>" +
            "</div>" +
            "<div class='confirmation'>" + obj.txt + "</div>" +
            "<div class='selectBtn'>" +
            "<span class='chooseBtn' id='disagree'>" + obj.no + "</span>" +
            "<span class='chooseBtn' id='agree'>" + obj.yes + "</span>" +
            "</div>" +
            "</div>" +
            "</div>");
        if (!obj.img) {
            $("img[src=" + obj.img + "]").remove();
        }
        if (!obj.txt) {
            $(".confirmation").html("是否确认？");
        }
        if (!obj.no) {
            $("#disagree").html("否");
        }
        if (!obj.yes) {
            $("#agree").html("是");
        }
        $('#confirm').on("click", ".chooseBtn,#xCross", function () {
            var index = $(this).index();
            $('#confirm').remove();
            if (index == 1) {
                obj.callback({
                    index: 1  //表示确认
                })
            } else {
                obj.callback({
                    index: 0  //表示取消
                })
            }
        });
    },
    //等待加载
    loading: function (data) {
        if (data) {
            $("body").append(loading);
            $(".kdm_loading").css({ "display": "block", "z-index": "99999999", "opacity": "1", "transition": "all .3s" });
        } else {
            $(".kdm_loading").remove();
            $(".kdm_loading").css({ "display": "none", "z-index": "-1000", "opacity": "0", "transition": "all .3s" });
        }
    },
    //提示信息
    toast: function (data) {
        $("body").append("<div id='toast' style='" + style + "'>" + data + "</div>");
        $("#toast").css({ "display": "block", "z-index": "9999999", "opacity": "1", "transition": "all .3s" });
        setTimeout(function () {
            $("#toast").remove();

            $("#toast").css({ "display": "none", "z-index": "-999999", "opacity": "0", "transition": "all .3s" });
        }, 3000)

    },
    //页面等待加载
    pageloading: function () {
        $("body").append(pageloading);
        var loader = 0;
        var imagearray = new Array;
        for (var i = 0; i < $("img").length; i++) {
            imagearray.push($($("img").get(i)).attr("src"));
        }
        imgloading = function (images, back) {
            var imagelegth = images.length;
            var pros = 0;
            if (imagelegth == 0) {
                return back(pros, true);
            }
            for (var s in images) {
                var item = images[s];
                var img = new Image;
                img.src = item;
                img.onload = function () {
                    loader++;
                    pros = ((loader / imagelegth * 100) >> 0)
                    if (pros >= 100) {
                        return back(pros, true)
                    }
                    back(pros, false)
                }
                img.onerror = function () {
                    loader++;
                    pros = ((loader / imagelegth * 100) >> 0)
                    if (pros >= 100) {
                        return back(pros, true)
                    }
                    back(pros, false)
                }
            }
        }
        imgloading(imagearray, function (pro, bool) {
            if (bool == true) {
                setTimeout(function () {
                    $(".loadings").css({ "display": "none" })
                    $(".kdm_loadings").remove()
                }, 500)
            }
        })
    },
    //用户登录
    //d表示登录是否显示下边文字
    login: function (objdata, show, d) {
        if (show) {
            $("body").append(login)
            var time = 60;
            $("#code").click(function (event) {

               
                var phone = Trim($('#kdm_phone').val(), 'g');
                if (!phonetest(phone)) {
                    kdm.toast('电话号码格式不正确');
                    return
                } else {
                    var state = $('#code').attr('data-state')
                    if (state == 1) {
                        times(true);
                        $.ajax({
                            type: 'POST',
                            url: '/Ajax/index/get_code?bind=1',
                            data: { telphone: phone },
                            dataType: 'json',
                            success: function (data) {
                                // console.log(data);
                                // data = data.split(',');
                                if (data.code == 0) {
                                    kdm.toast('验证码发送成功');
                                } else {
                                    kdm.toast('验证码发送失败');
                                }
                            }
                        });
                    }
                }
                return false
            });
            function times(data) {
                if (data) {
                    var state = $('#code').attr('data-state')
                    if (state == 1) {
                        $('#code').attr({ 'data-state': '0' })
                        $('#code').css({ 'background': '#eee', 'color': '#999' })
                        var timer = setInterval(function () {
                            $('#code').html(time + 's')
                            time--
                            if (time < 0) {
                                clearInterval(timer)
                                $('#code').html('重新获取')
                                $('#code').attr({ 'data-state': '1' })
                                $('#code').css({ 'background': '#ff8286', 'color': '#fff' })
                                time = 60
                            }
                        }, 1000)
                    }
                } else {
                    clearInterval(t);
                    timestate = 0;
                    time = 60
                }
            }
            var loginstatus = 1;
            $('#telphonesave').click(function () {
                var tel = Trim($('#kdm_phone').val(), 'g')
                var yzm = Trim($('#yzm').val(), 'g');
                if (!phonetest(tel)) {
                    kdm.toast('电话号码格式不正确')
                    return
                }
                if (yzm == '') {
                    kdm.toast('请填写验证码')
                    return
                }
                var activity = kdm.getUrlParam("activity");
                if (!activity) {
                    activity = kdm.getUrlParam("acyivity")
                }
                var channel = kdm.getUrlParam("channel") || 0;
                var agent = kdm.getUrlParam("agent") || 0;
                console.log(activity)

                if (loginstatus == 1) {
                    loginstatus = 0;
                    kdm.loading(true)
                    $.ajax({
                        type: 'POST',
                        url: '/shop/register/registersave?bind=1',
                        data: {
                            phone: tel,
                            yzm: yzm,
                            parentid: objdata.parentid,
                            activityfrom: objdata.activityfrom,
                            channel: channel,
                            agent: agent,
                            activity: activity,
                        },
                        dataType: 'json',
                        success: function (data) {
                            kdm.loading(false)
                            console.log(data)
                            loginstatus = 1;
                            if (data.status == 0) {
                                // window.location.href = '/shop/personcenter/newpersoncenter'
                                window.location.href = location.href;
                            } else {
                                kdm.toast(data.msg);
                            }
                        },
                        error: function () {

                        }
                    })
                }
            })
        } else {
            $(".l_zhezhaologin").remove()
        }
    },
    //用户关注微信公众号
    guanzhu: function () {
        $("body").append(kdm_guanzhu)
        $("#refreshContainer").css({ "padding-top": "50px" })
        $(".kdm_close").on("tap",function(){
             $("#kdm_guanzhu").remove();
             $("#refreshContainer").css({ "padding-top": "0px" })
        })
    },
    menu: function () {
        $("body").append(menu)
    },
  
    // 用户单机按钮统计
    statistic: function (obj) {
        $.ajax({
            type: "GET",
            url: 'http://bi.koudaimiao.com/Home/chart/get_statics',
            data: obj,
            dataType: "jsonp",
            success: function (data) {

            }
        });
    },
    // 判断手机类型
    mobile: function () {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            return "Android";
        } else if (u.indexOf('iPhone') > -1) {
            return "Ios";
        } else {
            return "qita";
        }
    },
    // 获取URL地址
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&|/)" + name + "=([^&|^/]*)(&|$|/)");
        //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);
        //匹配目标参数 
        if (r != null) return unescape(r[2]); return null;
        //返回参数值 
    },
    //通用分享弹窗
    share: function (obj) {
        if (!obj) {

        } else {
            var pic = obj.img;
            var str = obj.str;
        }
        pic === undefined ? pic = "/Public/module/common/share.png" : pic;
        str === undefined ? str = "点我分享~" : str;

        //分享弹层公用
        var shares = " <div class='kdm_share'>" +
            "<div>" +
            " <img class='sharePic' src=" + pic + " alt=''>" +
            "<div class='shareTxt'>" + str + "</div>" +
            "</div>" +
            "  <div class='yesBtn'>我知道了</div>" +
            "</div>";
        $("body").append(shares);
        $(".yesBtn").on("tap", function () {
            $(".kdm_share").hide();
            $(".kdm_share").remove();
        })
    },
    alert: function (text) {
        $("body").append("<div  id='kdmAlertRect'>" +
            "<div class='kdmAlert'>" +
            " <div class='kdmAlertText' > " + text + " </div > " +
            "  <div class='kdmAlertButton' > 我知道了</div > " +
            "</div>" +
            "</div>  ")
        $(".kdmAlertButton").on("tap", function (event) {
            $("#kdmAlertRect").remove();
            return false;
        })
    }

}




$("body").on("click", "#l_loginrect", function (event) {
    return false
})



setInterval(function () {
    $("#shou").css({ "bottom": "13rem", "transition": "all 1.5s" })
    setTimeout(function () {
        $("#shou").css({ "bottom": "15rem", "transition": "all 1.5s" })
    }, 1500)
}, 3000)
// 底部导航自动添加


//    验证码
var timer = 60;  //定义时间变量
var codestate = 1;
function getcode(tel, that) {
    if (codestate == 1) {
        codestate = 0;
        var tel = Trim($("#" + tel).val(), "g");
        if (!phonetest(tel)) {
            kdm.toast("手机号不正确");
            codestate = 1;
            return
        }
        var time = setInterval(function () {
            $(that).html(timer);
            timer--
            if (timer < 0) {
                clearInterval(time);
                $(that).html("点击发送")
                $(that).css("color", "#ffbd4b");
                timer = 60;
                codestate = 1;
            }
        }, 1000);
        $.post("/Ajax/index/get_code", { telphone: tel }, function (data) {
            console.log(data);
            data = data.split(',');
            if (data[1] == 0) {
                kdm.toast('验证码发送成功');
            } else {
                kdm.toast('验证码发送失败');
            }
        })
    }
}
//动态生成用户的ID
!(function () {
    if (localStorage.kid) {

    } else {
        var idStr = Date.now().toString(36)
        idStr += Math.random().toString(36).substr(3);
        localStorage.kid = idStr;
        return idStr;
    }
})()

//身份证验证
function validateIdCard(idCard) {
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
            var idCardwi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2);
            var idCardwiSum = 0;
            for (var i = 0; i < 17; i++) {
                idCardwiSum += idCard.substring(i, i + 1) * idCardwi[i];
            }
            var idCardMod = idCardwiSum % 11;
            var idCardLast = idCard.substring(17);
            if (idCardMod == 2) {
                if (idCardLast == "X" || idCardLast == "x") {
                    return true
                } else {
                    return false
                }
            } else {
                if (idCardLast == idCardY[idCardMod]) {
                    return true
                }
                else {
                    return false
                }
            }
        }
    } else {
        return false
    }
}


//设置字体大小
!function (win) {
    function resize() {
        var domWidth = domEle.getBoundingClientRect().width;
        if (domWidth / v > 540) {
            domWidth = 540 * v;
        }
        win.rem = (parseInt(domWidth) / 37.5) * 2;
        //      console.log(parseInt(domWidth))
        domEle.style.fontSize = win.rem + "px";
    }
    var v, initial_scale, timeCode, dom = win.document, domEle = dom.documentElement, viewport = dom.querySelector('meta[name="viewport"]'), flexible = dom.querySelector('meta[name="flexible"]');
    if (viewport) {
        //viewport??<meta name="viewport"content="initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5,user-scalable=no,minimal-ui"/>
        var o = viewport.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
        if (o) {
            initial_scale = parseFloat(o[2]);
            v = parseInt(1 / initial_scale);
        }
    } else {
        if (flexible) {
            var o = flexible.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
            if (o) {
                v = parseFloat(o[2]);
                initial_scale = parseFloat((1 / v).toFixed(2))
            }
        }
    }
    if (!v && !initial_scale) {
        var n = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi));
        v = win.devicePixelRatio;
        v = n ? v >= 3 ? 3 : v >= 2 ? 2 : 1 : 1, initial_scale = 1 / v
    }
    if (domEle.setAttribute("data-dpr", v), !viewport) {
        if (viewport = dom.createElement("meta"), viewport.setAttribute("name", "viewport"), viewport.setAttribute("content", "initial-scale=" + initial_scale + ", maximum-scale=" + initial_scale + ", minimum-scale=" + initial_scale + ", user-scalable=no"), domEle.firstElementChild) {
            domEle.firstElementChild.appendChild(viewport)
        } else {
            var m = dom.createElement("div");
            m.appendChild(viewport), dom.write(m.innerHTML)
        }
    }
    win.dpr = v;
    win.addEventListener("resize", function () {
        clearTimeout(timeCode), timeCode = setTimeout(resize, 300)
    }, false);
    win.addEventListener("pageshow", function (b) {
        b.persisted && (clearTimeout(timeCode), timeCode = setTimeout(resize, 300))
    }, false);
    /* ?????????????????body???????????12
     "complete" === dom.readyState ? dom.body.style.fontSize = 12 * v + "px" : dom.addEventListener("DOMContentLoaded", function() {
     //dom.body.style.fontSize = 12 * v + "px"
     }, false);
     */
    resize();

}(window);

$(document).ready(function () {
    kdm.pageloading()
})


