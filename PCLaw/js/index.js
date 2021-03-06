/**
 * Created by chenghui on 16/12/13.
 */
// $(function () {
//     $('.banner').unslider();
// });

$(function () {
    $('#home').fullpage({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
        navigation: true,
        // anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        paddingTop: '62px',
        loopBottom: true,
        verticalCentered:true,
        resize:true,
        // continuousVertical: true,
        // menu: '#menu',
        css3: true
    });
});
$(document).ready(function (e) {
    $(".tab li").mouseover(function () {
        $(".tab li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
        $(".tabCon div").hide().eq($(this).index()).show();
    });
});

//缩放比例
if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
    var version = parseFloat(RegExp.$1);
    if (version > 2.3) {
        var phoneScale = parseInt(window.screen.width) / 1200;
        document.write('<meta name="viewport" content="width=1200, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
    } else {
        document.write('<meta name="viewport" content="width=1200, target-densitydpi=device-dpi">');
    }
} else {
    document.write('<meta name="viewport" content="width=1200, user-scalable=yes, target-densitydpi=device-dpi">');
}