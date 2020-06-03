class HeHua{
    constructor(somboday){
        let defaultbody = {
            id:null,
            size:500,
            back:"red",
            linear:"true"
        }
        for(let key in somboday){
            if(somboday[key]!=null){
                this[key] = somboday[key];
            }else{
                this[key] = defaultbody[key];
            }
        }
        this.render();
    }
    render(){
        console.log(this.id);
        this.id.style.width = "100px";
    }
}