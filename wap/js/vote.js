function getScript(url, callback, bm) { //返回js接口请求
    if (!bm) {
        bm = 'utf-8'
    }
    var scr = document.createElement('script');
    scr.onload = scr.onreadystatechange = function() {
        var st = scr.readyState;
        if (st && st !== 'loaded' && st !== 'complete') return;
        scr.onload = scr.onreadystatechange = null;
        callback && callback();
    };
    scr.src = url;
    scr.charset = bm;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

var url=window.location.href;
if(url.indexOf("?.pcgames.com.cn") != -1){
    $(".area07 .pageBox .pic a,.area07 .pageBox .meto").show();
    getScript('http://magicube.pconline.com.cn/vote/_js_vote2.jsp?voteId=2507',function(){
        CubeVote.pagecallback=function(data){
            
            alert('投票成功');
        }
    })
}
