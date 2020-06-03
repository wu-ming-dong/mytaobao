// OPPLANE(opposeplaneobj,20,green,gray)
class OPPLANE{
    constructor(doms,size,color1,color2){
        this.doms = doms;
        this.size = size;
        this.color1 = color1;
        this.color2 = color2;
        this.render();
    }
    render(){
        this.doms.style.transition = "all 1s linear";
        let oplaneswing = document.createElement("div");
        oplaneswing.style.cssText = `
          position:absolute;
          top:${this.size*-0.5}px;
          left:${this.size*-0.5}px;
          width:${this.size*2}px;
          height:${this.size*2}px;
          background:${this.color2};
          transform-origin:${this.size*1}px ${this.size*1}px;
          transform:rotateZ(-45deg);
        `;
        let oppswinputing = document.createElement("div");
        oppswinputing.style.cssText = `
           position:absolute;
           background:black;
           top:${this.size*0.8}px;
           left:${this.size*0.8}px;
           width:${this.size*1.2}px;
           height:${this.size*1.2}px;
           transform-origin: ${this.size*0.6}px ${this.size*0.6}px;
           transform:rotateZ(-90deg);
           border-radius: 8px 0 8px 0;
        `;
        oplaneswing.appendChild(oppswinputing);
        this.doms.appendChild(oplaneswing);
        let oplanebody = document.createElement("div");
        oplanebody.style.cssText = `
          position:absolute;
          width:${this.size*1.4}px;
          height:${this.size}px;
          left:-5px;
          background:${this.color1};
          border-radius:50%;
        `;
        this.doms.appendChild(oplanebody);
        let oplanebodyafter = document.createElement("div");
        oplanebodyafter.style.cssText = `
            position:absolute;
            width:6px;
            height:8px;
            background:${this.color2};
            transform-origin: 3px 4px;
            transform:rotateZ(45deg);
            top:12px;
            left:6px;
        `;
        oppswinputing.appendChild(oplanebodyafter);
        for(let i=0;i<3;i++){
            let swingdoms = document.createElement("div");
            swingdoms.className = "swingdoms";
            swingdoms.style.cssText = `
              background:transparent;
              width:2px;
              height:2px;
              position:absolute;
              bottom:0px;
              transform-origin: 0px 1px;
            `;
            swingdoms.style.right = i*2 + "px";
            swingdoms.style.transform = "rotateZ("+(i-1)*5+'deg'+")";
            oplanebodyafter.appendChild(swingdoms);
            for(let j=0;j<10;j++){
                let swinglidoms = document.createElement("li");
                swinglidoms.style.cssText = `
                    background:red;
                    width:2px;
                    height:2px;
                    position:absolute;
                    transition:all 1s linear;
                `;
                swingdoms.appendChild(swinglidoms);
            }
        }
        for(let i=0;i<3;i++){
            let oplanebattery = document.createElement("div");
            oplanebattery.className = "batteryballdoms"
            oplanebattery.style.cssText = `
               position:absolute;
               width:20px;
               height:4px;
               background:${this.color1};
            `;
            if(i==1){
                oplanebattery.style.left = "-20px";
                oplanebattery.style.top = "8px";
            }else{
                oplanebattery.style.left = "-10px";
                oplanebattery.style.top = i*8+"px";
            }
            oplanebody.appendChild(oplanebattery);
        }
        let swingputdoms = document.getElementsByClassName("swingdoms");
        let swingputcontrol = 0;
        setInterval(() => {
            if(swingputcontrol==0){
                for(let i=0;i<swingputdoms.length;i++){
                    for(let j=0;j<swingputdoms[i].children.length;j++){
                        swingputdoms[i].children[j].style.top = j*5+5+ "px";
                    }
                }
                swingputcontrol=1;
            }else{
                for(let i=0;i<swingputdoms.length;i++){
                    for(let j=0;j<swingputdoms[i].children.length;j++){
                        if(parseFloat(swingputdoms[i].children[j].style.top)>30){
                            swingputdoms[i].children[j].style.top = "0px";
                        }else{
                            swingputdoms[i].children[j].style.top = parseFloat(swingputdoms[i].children[j].style.top) + 1 + "px";
                        }
                    }
                }
            }
        }, 100);
        let batteryballdoms = document.getElementsByClassName("batteryballdoms");
        let oplaneballcontrol = 0;
        let planecontrol = 0;
        let firstbodytop = 0;
        let changebodytop = 0;
        setInterval(() => {
             if(oplaneballcontrol%5==0){
                firstbodytop = parseFloat(this.doms.style.top);
                 //炮管子元素归零
                for(let i=0;i<batteryballdoms.length;i++){
                    batteryballdoms[i].innerHTML = "";
                }
                //重行添加子元素
                for(let i=0;i<batteryballdoms.length;i++){
                    for(let j=0;j<5;j++){
                        let balldoms = document.createElement("li");
                        balldoms.style.cssText = `
                          position:absolute;
                          width:4px;
                          height:4px;
                          background:${this.color1};
                          transition: all 1s linear;
                          border-radius:50%;
                        `;
                        balldoms.style.right = j*5 + "px";
                        batteryballdoms[i].appendChild(balldoms);
                    }
                }
             }else{
                //战机的移动特效  planecontrol
                if(parseFloat(this.doms.style.top)<-5){
                    planecontrol = 0;
                }
                if(parseFloat(this.doms.style.top)>550){
                    planecontrol = 1;
                }
                if(planecontrol==0){
                    this.doms.style.top = parseFloat(this.doms.style.top)+50*1 +"px";
                }else{
                    this.doms.style.top = parseFloat(this.doms.style.top)-50*1 +"px";
                }
                changebodytop = parseFloat(this.doms.style.top);
                //炮弹的移动特效
                for(let i=0;i<batteryballdoms.length;i++){
                    for(let j=0;j<batteryballdoms[i].children.length;j++){
                        if(parseFloat(batteryballdoms[i].children[j].style.right)>10){
                            batteryballdoms[i].children[j].style.background = this.color2;
                        }
                        batteryballdoms[i].children[j].style.top = firstbodytop-changebodytop+"px";
                        batteryballdoms[i].children[j].style.right = parseFloat(batteryballdoms[i].children[j].style.right) + 10*5 + "px";
                    }
                }
             }
             oplaneballcontrol++;
        }, 1000);
    }
}