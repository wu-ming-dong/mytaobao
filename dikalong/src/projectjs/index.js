function showDate(box,date,num){
    if(!num){num = date.length}
    box.innerHTML = "";
    let liarr = [ ];
    //单个数据格式
    // {
    //     "url":"MenuThumbnail_Pilates.png",
    //     "title":{
    //             "url":"",
    //             "date":"基础健身/普拉提"
    //         },
    //     "arr":[
    //         {
    //             "url":"",
    //             "date":"男士"
    //         },
    //         {
    //             "url":"",
    //             "date":"女士"
    //         }
    //     ]
    //   }
    for(let i=0;i<num;i++){
        let lidom = document.createElement("li");
        lidom.className = "singleproductclass";
        let div0 = document.createElement("div");
        let imgdom = document.createElement("img");
        imgdom.src = "imgs/indeximgs/"+date[i].url;
        div0.appendChild(imgdom);
        lidom.appendChild(div0);
        let div1 = document.createElement("div");
        lidom.appendChild(div1);
        let pdom = document.createElement("p");
        let adom = document.createElement("a");
        let hrdom = document.createElement("hr");
        adom.href = date[i].title.url;
        adom.innerHTML = date[i].title.date;
        pdom.appendChild(adom);
        div1.appendChild(pdom);
        div1.appendChild(hrdom);
        for(let j=0;j<date[i].arr.length;j++){
            let pdom1 = document.createElement("p");
            let adom1 = document.createElement("a");
            adom1.href = date[i].arr[j].url;
            adom1.innerHTML = date[i].arr[j].date;
            pdom1.appendChild(adom1);
            let spandom = document.createElement("span");
            spandom.className = "iconfont";
            spandom.innerHTML = "&#xe509";
            pdom1.appendChild(spandom);
            div1.appendChild(pdom1);
        }
        box.appendChild(lidom);
        liarr.push(lidom);
    }
    return liarr;
    //数据格式
    // <li class="singleproductclass">
    //         <div><img src="imgs/indeximgs/menuThumbnail_fitness.png" alt=""></div>
    //         <div>
    //             <p><a href="">健身</a></p>
    //             <hr>
    //             <p><a href="">有氧健身装备</a><span class="iconfont">&#xe509</span></p>
    //             <p><a href="">属性/力量装备及食品</a><span class="iconfont">&#xe509</span></p>
    //             <p><a href="">男士服饰</a><span class="iconfont">&#xe509</span></p>
    //             <p><a href="">女士服饰</a><span class="iconfont">&#xe509</span></p>
    //         </div>
    // </li>
}