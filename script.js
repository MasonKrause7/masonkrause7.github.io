function getQueryParametersAsJSON() {
    let url = window.location.href;
    let delimIndex = url.indexOf("?");
    let args = url.substring(delimIndex+1);
    let argsArr = args.split("&");
    let json = {}
    for(let i = 0; i < argsArr.length; i++){
        let nameAndVal = argsArr[i].split("=");
        let name = nameAndVal[0];
        let val = nameAndVal[1];
        json[name] = val;
    }
    console.log(json);
    return json;
}
window.onload = () => {
    if(window.location.href.indexOf("?") >= 0){
        args = getQueryParametersAsJSON();
        if(args.id){
            document.getElementById(`${args.id}`).style.display="block";
        }
    }
}