function setMainProductDate(box,obj){
    let a = 0;
    let b = 0;
    let uldom = box.children[0];
    uldom.innerHTML = "";
    for(let j=0;j<obj.length;j++){
        let lidom = document.createElement("li");
        lidom.className = "middlesinglecollectclass";;
        uldom.appendChild(lidom);
        [a,b] = getnum(obj[j].price);
        let h2dom = document.createElement("h2");
        h2dom.className = "collectpruductmoney";
        h2dom.innerHTML ="￥" + a +".";
        let spandom = document.createElement("span");
        spandom.innerHTML = b +"";
        h2dom.appendChild(spandom);
        lidom.appendChild(h2dom);
        let imgs = document.createElement("img");
        imgs.src = "imgs/indeximgs/"+obj[j].url;
        lidom.appendChild(imgs);
        let h3dom = document.createElement("h3");
        h3dom.innerHTML = obj[j].brand;
        lidom.appendChild(h3dom);
        let h4dom = document.createElement("h4");
        h4dom.innerHTML = obj[j].desc;
        lidom.appendChild(h4dom);
        if(obj[j].rate!=""){
            let pdom = document.createElement("p");
            pdom.innerHTML = "<span class='iconfont'>&#xe511</span>"+obj[j].rate;
            lidom.appendChild(pdom);
        }
    }
    return box;
}

function getnum(num){
    num = parseFloat(num);
    let num1 = 0;
    let num2 = 0;
    num1 = parseInt(num);
    num2 = parseInt((num-num1)*100);
    return [num1,num2];
}