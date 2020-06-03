//手机号码验证
function checkPhone(box){ 
    var phone = box.value;
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");  
        return false; 
    }else{
        return true;
    }
}
//获取密码最新输入的一个字符
function getnewpassword(str){
    let codecharnum
    let codenum1 = false;
    let codenum2 = false;
    if(str!=""){
        for(let i=0;i<str.length;i++){
            codecharnum = str.charCodeAt(i);
            if((codecharnum>=48&&codecharnum<=57)){
                codenum1 = true;
            }
            if((codecharnum>=97&&codecharnum<=121)||(codecharnum>=65&&codecharnum<=90)){
                codenum2 = true;
            }
        }
    }
    return [codenum1,codenum2];

}


//数字字母混合N位验证码。（例：6yF3）
function getCode(n){
    var str="";
    for(i=1;i<=n;i++){
        while(true){
            var a= parseInt(Math.random()*100+30);
            if((a>=97&&a<=121)||(a>=65&&a<=90)||(a>=48&&a<=57)){
                    break;
            }else{
                continue;
            }
        }
        str+=String.fromCharCode(a);
    }
    return str;
}