class PLANE{
    constructor(doms,size){
        this.doms = doms;
        this.size = size;
        this.render();
    }
    //构建飞机
    render(){
        //构建飞机主体
        let domsbody = document.createElement("div");
        domsbody.style.cssText = `
           position:absolute;
           top:${this.size*0.25}px;
           left:${this.size*0.2}px;
           width:${this.size*0.6}px;
           height:${this.size*0.5}px;
           background:gray;
           border-radius:${this.size*0.5}px;
        `;
        this.doms.appendChild(domsbody);
        let domshead = document.createElement("div");
        domshead.style.cssText = `
           position:absolute;
           top:${this.size*0.1}px;
           left:${this.size*0.5}px;
           width:${this.size*1}px;
           height:${this.size*0.3}px;
           border-radius:0 ${this.size*1}px ${this.size*1}px 0;
           background:pink;
        `;
        domsbody.appendChild(domshead);
        let domstail = document.createElement("div");
        domstail.style.cssText = `
            position:absolute;
            top:${this.size*0.1}px;
            right:${this.size*0.3}px;
            width:${this.size*0.9}px;
            height:${this.size*0.3}px;
            border-radius:${this.size*0.1}px 0 0 ${this.size*0.1}px;
            background:white;
        `;
        domsbody.appendChild(domstail);
        let domsmiddlbod = document.createElement("div");
        domsmiddlbod.style.cssText = `
            position:absolute;
            top:${this.size*0.1}px;
            left:${this.size*0.2}px;
            width:${this.size*0.6}px;
            height:${this.size*0.3}px;
            border-radius:${this.size*0.15}px ${this.size*0.2}px ${this.size*0.2}px ${this.size*0.15}px;
            background:red;
        `;
        domsbody.appendChild(domsmiddlbod);
        //构建飞机侧翼
        let a=0.25,b=0.2,c=1.1,d=0.1,e=0.3,f=0.1,g=-0.1,h=0.2;
        for(let i=0;i<4;i++){
            let domsairfoil = document.createElement("div");
            if(i<2){
                domsairfoil.style.cssText = `
                    position:absolute;
                    top:${this.size*a}px;
                    left:${this.size*b}px;
                    width:${this.size*c}px;
                    height:${this.size*d}px;
                    border-radius:${this.size*e}px ${this.size*e}px 0 0;
                    background:blue;
                `;
                if(i%2==0){
                    domsairfoil.style.top = this.size*f+"px";
                    domsairfoil.style.left = this.size*g+"px";
                    domsairfoil.style.background = "purple";
                    domsairfoil.style.height = this.size*h+"px";
                }
            }else{
                domsairfoil.style.cssText = `
                    position:absolute;
                    bottom:${this.size*a}px;
                    left:${this.size*b}px;
                    width:${this.size*c}px;
                    height:${this.size*d}px;
                    border-radius:0 0 ${this.size*e}px ${this.size*e}px;
                    background:blue;
                `;
                if(i%2==0){
                    domsairfoil.style.bottom = this.size*f+"px";
                    domsairfoil.style.left = this.size*g+"px";
                    domsairfoil.style.background = "purple";
                    domsairfoil.style.height = this.size*h+"px";
                }
            }
            this.doms.appendChild(domsairfoil);
        }
        for(let i=0;i<4;i++){
            let domswing = document.createElement("div");
            domswing.style.cssText = `
                position:absolute;
                left:${this.size*0.08}px;
                width:0;
                height:0;
                border:${this.size*0.5}px solid transparent;
            `;
            if(i<2){
                domswing.style.bottom = this.size*(-1.2)+"px";
                domswing.style.borderTopWidth = this.size*0.8 + "px";
                if(i%2==0){
                    domswing.style.transform = "rotateZ(50deg)";
                    domswing.style.bottom = this.size*(-1.1)+"px";
                    domswing.style.left = this.size*(-0.4)+"px";
                    domswing.style.borderLeftWidth = this.size*0.1 + "px";
                    domswing.style.borderTopColor = "gray";
                    domswing.style.borderLeftColor = "gray";

                }else{
                    domswing.style.transform = "rotateZ(-5deg)";
                    domswing.style.borderLeftWidth = this.size*0.28 + "px";
                    domswing.style.borderTopColor = "blue";
                    domswing.style.borderLeftColor = "blue";
                }
            }else{
                domswing.style.top = this.size*(-1.2)+"px";
                domswing.style.borderBottomColor = "blue";
                domswing.style.borderLeftColor = "blue";
                domswing.style.borderBottomWidth = this.size*0.8 + "px";
                if(i%2==0){
                    domswing.style.transform = "rotateZ(-50deg)";
                    domswing.style.top = this.size*(-1.1)+"px";
                    domswing.style.left = this.size*(-0.4)+"px";
                    domswing.style.borderLeftWidth = this.size*0.1 + "px";
                    domswing.style.borderBottomColor = "gray";
                    domswing.style.borderLeftColor = "gray";
                }else{
                    domswing.style.transform = "rotateZ(5deg)";
                    domswing.style.borderLeftWidth = this.size*0.28 + "px";
                    domswing.style.borderBottomColor = "blue";
                    domswing.style.borderLeftColor = "blue";
                }
            }
            this.doms.appendChild(domswing);
        }
         //构建飞机的炮
         for(let i=0;i<5;i++){
            let planebattery = document.createElement("div");
            planebattery.className = "batterydoms";
            this.doms.index = planebattery.className;
            planebattery.style.cssText = `
                position:absolute;
                width:50px;
                height:5px;
                background:green;
                left:200px;
                border-radius:0 10px 10px 0;
            `;
            if(i==2){
                planebattery.style.top = this.size*0.22 + "px";
                planebattery.style.left = this.size*1.2 + "px";
            }else{
                if(i<2){
                    planebattery.style.top = this.size*0.5*(i-3)/(i+1) + "px";
                }else{
                    planebattery.style.bottom = this.size*0.5*(1-i)/(5-i) + "px";
                }
                if(i%2==0){
                    planebattery.style.left = this.size*(-0.2) + "px";
                }else{
                    planebattery.style.left = this.size*0.4 + "px";
                }
            }
            domsbody.appendChild(planebattery);
         }
         //构建飞机尾部
         let planeafterbody = document.createElement("div");
         planeafterbody.style.cssText = `
             position:absolute;
             width:40px;
             height:40px;
             background:yellow;
             left:-90px;
             top:5px;
             border-radius:0 6px 6px 0;
         `;
         domsbody.appendChild(planeafterbody);
         for(let i=0;i<2;i++){
             let planeafterswing = document.createElement("div");
             planeafterswing.style.cssText = `
                 position:absolute;
                 width:20px;
                 height:20px;
                 right:25px;
                 background:yellow;
             `;
             if(i==0){
                planeafterswing.style.transformOrigin = "0px 0px";
                planeafterswing.style.top = "0px";
                planeafterswing.style.transform = "rotateZ(-45deg)";
             }else{
                planeafterswing.style.transformOrigin = "0px 20px";
                planeafterswing.style.bottom = "0px";
                planeafterswing.style.transform = "rotateZ(45deg)";
             }
             planeafterbody.appendChild(planeafterswing);
         }
         //构建尾部喷射效果
         for(let i=0;i<5;i++){
             let planeaftershoot = document.createElement("li");
             planeaftershoot.className = "ftershootlidoms";
             planeaftershoot.style.cssText = `
               position:absolute;
               width:5px;
               height:4px;
               background:yellow;
             `;
             for(let j=0;j<10;j++){
                let aftershootdoms = document.createElement("p");
                aftershootdoms.style.cssText = `
                   position:absolute;
                   width:6px;
                   height:4px;
                   background:red;
                   transition:all 0.9s linear;
                   border-radius:50%;
                `;
                aftershootdoms.style.right = j*this.size*(0.07) + 10 +"px";
                planeaftershoot.appendChild(aftershootdoms);
             }
             planeaftershoot.style.transform = "rotate("+-1*(i-2)*5+'deg'+")";
             planeaftershoot.style.left = Math.abs(i-2)*this.size*(0.05) +"px";
             planeaftershoot.style.top = this.size*0.06*i +5+ "px";
             planeafterbody.appendChild(planeaftershoot);
         }
         let ftershootlidoms = document.getElementsByClassName("ftershootlidoms");
         setInterval(() => {
              for(let i=0;i<ftershootlidoms.length;i++){
                  for(let j=0;j<ftershootlidoms[i].children.length;j++){
                    if(parseInt(ftershootlidoms[i].children[j].style.right)>=150){
                        ftershootlidoms[i].children[j].style.color = "transparent";
                        ftershootlidoms[i].children[j].style.right = "0px";
                    }else{ 
                        ftershootlidoms[i].children[j].style.color = "red";
                        ftershootlidoms[i].children[j].style.right = parseFloat(ftershootlidoms[i].children[j].style.right)+0.2*j*(2-Math.abs(i-2)/2)+"px";
                    }
                  }
              }
         }, 1000);
    }
}