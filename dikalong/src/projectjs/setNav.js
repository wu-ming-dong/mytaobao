function setNav(box,obj){
    let num  = 1;
    let numdom = 0;
    let isChange = "true";
    let divdom1 = box.children[0];
    let divdom2 = box.children[1];
    let ulshowbox = divdom2.children[0];
    let pointlidoms = divdom1.children[0].children;
    for(let i=0;i<pointlidoms.length;i++){
        if(pointlidoms[i].children[0]!==undefined){
            if(pointlidoms[i].children[0].innerHTML!=""){
                pointlidoms[i].children[0].href = getahref(pointlidoms[i].children[0].innerHTML,obj);
            }
        }
    }
    numdom = pointlidoms[0];
    pointlidoms[0].style.backgroundColor = "white";
    pointlidoms[0].style.border = "1px solid white"
    box.onmouseleave = function(){
        numdom = pointlidoms[0];
        isChange = "true";
        pointlidoms[0].style.backgroundColor = "white";
        pointlidoms[0].style.border = "1px solid white"
    }
    for(let i=0;i<pointlidoms.length-obj[1].length;i++){
        if(pointlidoms[i].children[0]!=undefined){
            pointlidoms[i].onmouseenter  = function(){
                pointlidoms[i].style.backgroundColor = "white";
                pointlidoms[i].style.border = "1px solid white";
            }
            pointlidoms[i].onmouseleave = function(){
                pointlidoms[i].style.backgroundColor = "#edeff1";
                pointlidoms[i].style.border = "1px solid #edeff1";
            }
            pointlidoms[i].onclick = function(){
                isChange = "true";
                numdom =  pointlidoms[i];
            }
        }
    }
    setInterval(() => {
        if(isChange){
            isChange = !isChange;
            ulshowbox.innerHTML = ""
            num = getchild(numdom.children[0].innerHTML,obj);
            // console.log(num)
            if(num[1]=="false"){
                for(let i=0;i<num[2].length;i++){ 
                    let lidom = document.createElement("li");
                    lidom.className = num[0];
                    let adom = document.createElement("a");
                    adom.href = num[2][i].href;
                    let imgdom = document.createElement("img");
                    imgdom.src = "imgs/indeximgs/" + num[2][i].url;
                    adom.appendChild(imgdom);
                    lidom.appendChild(adom);
                    let pdom = document.createElement("p");
                    pdom.innerHTML = num[2][i].title;
                    lidom.appendChild(pdom);
                    ulshowbox.appendChild(lidom);
                }
            }else{
                for(let i=0;i<num[2].length;i++){ 
                    console.log(num[2][i])
                    let lidom1 = document.createElement("li");
                    lidom1.className = num[0];
                    let h3dom1 = document.createElement("h3");
                    h3dom1.innerHTML = num[2][i].title;
                    lidom1.appendChild(h3dom1);
                    for(let j=0;j<num[2][i].child.length;j++){
                        let pdom1 = document.createElement("p");
                        let adom1 = document.createElement("a");
                        adom1.href = num[2][i].child[j].href;
                        adom1.innerHTML =num[2][i].child[j].title;
                        pdom1.appendChild(adom1);
                        lidom1.appendChild(pdom1);
                    }
                    ulshowbox.appendChild(lidom1);
                }
            }
        }
    }, 100);
}
function getahref(sur,obj){
    for(let i=0;i<obj.length;i++){
        for(let j=0;j<obj[i].length;j++){
            if(obj[i][j].navtitle==sur){
                return obj[i][j].navhref;
            }
        }
    }
}
function getchild(sur,obj){
    for(let i=0;i<obj[0].length;i++){
        if(obj[0][i].navtitle==sur){
            return [obj[0][i].navchildclass,obj[0][i].childmodel,obj[0][i].child];
        }
    }
}