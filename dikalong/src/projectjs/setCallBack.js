function setCallBack(box,obj){
    let uldom = box.children[0];
    uldom.innerHTML = "";
    for(let i=0;i<obj.length;i++){
        let lidom = document.createElement("li");
        let imgdom = document.createElement("img");
        imgdom.src = "imgs/indeximgs/" + obj[i].imgsrc;
        lidom.appendChild(imgdom);
        let divdom = document.createElement("div");
        let h3dom1 = document.createElement("h3");
        h3dom1.innerHTML = "商品召回";
        divdom.appendChild(h3dom1);
        let h3dom2 = document.createElement("h3");
        h3dom2.innerHTML = obj[i].type;
        divdom.appendChild(h3dom2);
        let pdom = document.createElement("p");
        pdom.innerHTML = obj[i].season;
        divdom.appendChild(pdom);
        let h3dom3 = document.createElement("h3");
        let adom = document.createElement("a");
        adom.href = obj[i].href;
        adom.innerHTML = "商品召回";
        h3dom3.appendChild(adom);
        divdom.appendChild(h3dom3);
        lidom.appendChild(divdom);
        uldom.appendChild(lidom);
    }
    return box;
}