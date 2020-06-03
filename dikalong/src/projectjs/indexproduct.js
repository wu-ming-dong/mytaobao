function setProduct(basebox,obj){
    basebox.innerHTML="<h2 class='collectaretitle'>侬说搭配</h2>";
    let fisclass = "";
    let secclass = "";
    let liclass = "";
    let a=0;
    let b=0;
    for(let i=0;i<obj.length;i++){
         if(obj[i].model.set1=="left"){
            fisclass = "collectlittlebox  boxturnleft";
            secclass = "collectbigbox  boxturnright";
         }else{
            fisclass = "collectlittlebox  boxturnright";
            secclass = "collectbigbox  boxturnleft";
         }
         if(obj[i].model.set2=="big"){
            liclass = "bigsinglecollectclass";
         }else{
            liclass = "littlesinglecollectclass";
         }
        //创建节点
        let divbox = document.createElement("div");
        divbox.className = "collectbox";
        basebox.appendChild(divbox);
        let uldom1 = document.createElement("ul");
        uldom1.className = fisclass;
        let uldom2 = document.createElement("ul");
        uldom2.className = secclass;
        divbox.appendChild(uldom1);
        divbox.appendChild(uldom2);
        //对uldom1操作
        let adom = document.createElement("a");
        adom.href = obj[i].ahref;
        let imgdom = document.createElement("img");
        imgdom.src = "imgs/indeximgs/" + obj[i].bigsrc;
        adom.appendChild(imgdom);
        uldom1.appendChild(adom);
        let divdom = document.createElement("div");
        divdom.className = "lookmoreproduct";
        divdom.innerHTML = "查看更多产品";
        uldom1.appendChild(divdom);
        //对uldom2操作
        for(let j=0;j<obj[i].ulbox.length;j++){
            let lidom = document.createElement("li");
            lidom.className = liclass;
            uldom2.appendChild(lidom);
            [a,b] = getnum(obj[i].ulbox[j].price);
            let h2dom = document.createElement("h2");
            h2dom.className = "collectpruductmoney";
            h2dom.innerHTML ="￥" + a +".";
            let spandom = document.createElement("span");
            spandom.innerHTML = b +"";
            h2dom.appendChild(spandom);
            lidom.appendChild(h2dom);
            let imgs = document.createElement("img");
            imgs.src = "imgs/indeximgs/"+obj[i].ulbox[j].url;
            lidom.appendChild(imgs);
            let h3dom = document.createElement("h3");
            h3dom.innerHTML = obj[i].ulbox[j].brand;
            lidom.appendChild(h3dom);
            let h4dom = document.createElement("h4");
            h4dom.innerHTML = obj[i].ulbox[j].desc;
            lidom.appendChild(h4dom);
            if(obj[i].ulbox[j].rate!=""){
                let pdom = document.createElement("p");
                pdom.innerHTML = "<span class='iconfont'>&#xe511</span>"+obj[i].ulbox[j].rate;
                lidom.appendChild(pdom);
            }
        }
    }
}

function getnum(num){
    num = parseFloat(num);
    let num1 = 0;
    let num2 = 0;
    num1 = parseInt(num);
    num2 = parseInt((num-num1)*100);
    return [num1,num2];
}