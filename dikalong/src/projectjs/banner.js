// 轮播图
function setBanner(box){
    let banneruldom = box.children[0];
    banneruldom.style.transition = "left 0.5s linear";
    let doudouuldom = box.children[1];
    let pointuldom = box.children[2];
    let isTrue = true;
    let doudou = doudouuldom.children;
    let point = pointuldom.children;
    let dirc = 1;
    let ulleft = 0;
    let starttim = 0;
    for(let i=0;i<doudou.length;i++){
        doudou[i].onclick = function(){
            isTrue = false;
            ulleft = i;
        }
    }
    //右移动
    point[1].onclick = function(){
        isTrue = false;
        if(ulleft>0){
            ulleft--;
        }
    }
    //左移动
    point[0].onclick = function(){
        isTrue = false;
        if(ulleft<3){
            ulleft++;
        }
    }
    setInterval(() => {
    starttim += 100;
    banneruldom.style.left = -1350*ulleft+ "px";
    if(starttim%3000==0){
        if(isTrue){
            if(ulleft<=0){dirc = 1;}
            if(ulleft>=3){dirc = -1;}
            if(dirc==1){
                ulleft++;
            }else{
                ulleft--;
            }
        }else{
            isTrue = !isTrue;
        }
    }
    //根据下标ulleft改变变化
    for(let i=0;i<doudou.length;i++){
        if(ulleft==i){
            doudou[i].style.width = "33px";
            doudou[i].children[0].style.width = doudou[i].children[0].offsetWidth + 1.4 + "px";
        }else{
            doudou[i].style.width = "13px";
            doudou[i].children[0].style.width = "1px";
        }
    }
    }, 100);
}

//类轮播图
function moveSet(box,n,z){
    let isTrue = true;
    let uldoms = box.children[0];
    let pointdom = box.children[1].children;
    box.style.position = "relative";
    uldoms.style.position = "absolute";
    uldoms.style.overflow = "hidden";
    let lidoms = uldoms.children;
    let basex = 0;
    for(let i=0;i<lidoms.length;i++){
        lidoms[i].style.position = "absolute";
        lidoms[i].style.transition = "left 1s linear";
        lidoms[i].style.left = i*lidoms[i].offsetWidth + i*z + "px";
    }
    //按钮效果
    box.onmouseenter = function(e){
        box.onmousemove = function(e){
            if((e||window.e).clientX-this.offsetLeft<this.offsetWidth/2){
                pointdom[0].style.opacity = 1;
                pointdom[1].style.opacity = 0.2;
            }else{
                pointdom[1].style.opacity = 1;
                pointdom[0].style.opacity = 0.2;
            };
        }
    }
    pointdom[0].onclick = function(){
        basex++;
        if(basex>=lidoms.length-n){basex = lidoms.length-n};
    }
    pointdom[1].onclick = function(){
        basex--;
        if(basex<=0){basex = 0};
    }
    //移动效果
    setInterval(() => {
        for(let i=0;i<lidoms.length;i++){
            lidoms[i].style.left = (i-basex)*(lidoms[i].offsetWidth + 1*z) + "px";
        }
    }, 100);

}

//隐身效果
function upDown(obj){
    obj.style.position = "relative";
    let updom = obj.children[0];
    updom.style.position = "absolute";
    updom.style.transition = "right 1s linear";
    obj.onmouseenter = function(){ 
        updom.style.right = updom.offsetWidth*(-0.1) + "px";
        updom.style.opacity = 0.9;
    }
    obj.onmouseleave = function(){
        updom.style.right = updom.offsetWidth*(-0.9) + "px";
        updom.style.opacity = 0.8;
    }
}

//隐身效果（2）
function textUpDown(obj){
    obj.style.position = "relative";
    let updom = obj.children[1];
    let showdom = obj.children[0];
    let immgdom = showdom.children[0];
    showdom.style.position = "absolute";
    updom.style.position = "absolute";
    updom.style.transition = "all 0.6s linear";
    immgdom.style.transition = "all 0.4s linear";
    updom.style.top = updom.offsetHeight*(0.9) + "px";
    obj.onmouseenter = function(){ 
        updom.style.top = updom.offsetHeight*(0.2) + "px";
        updom.style.backgroundColor = "white";
        updom.children[0].style.fontSize = "22px";
        immgdom.style.width = "80px";
        immgdom.style.height = "80px";
        immgdom.style.marginTop = "90px";

    }
    obj.onmouseleave = function(){
        updom.style.top = updom.offsetHeight*(0.9) + "px";
        updom.style.backgroundColor = "transparent";
        updom.children[0].style.fontSize = "16px";
        immgdom.style.width = "130px";
        immgdom.style.height = "130px";
        immgdom.style.marginTop = "50px";
    }
}
