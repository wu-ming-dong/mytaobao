function setNewProduct(box,obj){
    let uldom = box.children[0];
    uldom.innerHTML = "";
    let a=0;
    let b=0;
    for(let i=0;i<obj.length;i++){
        let lidom = document.createElement("li");
        lidom.className = "singlenewproduct";
        let adom = document.createElement("a");
        adom.href = obj[i].ahref;
        let imgdom = document.createElement("img");
        imgdom.src =  "imgs/indeximgs/"+obj[i].url;
        adom.appendChild(imgdom);
        lidom.appendChild(adom);
        let divdom = document.createElement("div");
        lidom.appendChild(divdom);
        let uld = document.createElement("ul");
        divdom.appendChild(uld);
        let h3dom = document.createElement("h3");
        h3dom.innerHTML = obj[i].brand;
        divdom.appendChild(h3dom);
        let h4dom = document.createElement("h4");
        h4dom.innerHTML = obj[i].desc;
        divdom.appendChild(h4dom);
        [a,b] = getnum(obj[i].price);
        let h2dom = document.createElement("h2");
        h2dom.className = "newpruductmoney";
        h2dom.innerHTML = "￥"+a+".";
        let spandom = document.createElement("span");
        spandom.className = "littlewordsize";
        spandom.innerHTML = b;
        h2dom.appendChild(spandom);
        divdom.appendChild(h2dom);
        uldom.appendChild(lidom);
    } 
    return box;
};



function getnum(num){
    num = parseFloat(num);
    let num1 = 0;
    let num2 = 0;
    num1 = parseInt(num);
    num2 = parseInt((num-num1)*100);
    return [num1,num2];
}