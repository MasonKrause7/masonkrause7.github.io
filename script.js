

function getIdArg(){
    const urlArgs = new URLSearchParams(window.location.search);
    return urlArgs.get('id');
}
function renderEventInfo(){
    const id = getIdArg();
    const eventObj = window[id];
    console.log(eventObj);
    if(eventObj.title){
        document.getElementById("event-title").innerText = `${eventObj.title}`;
    }
}

window.onload = () => {
    if(window.location.href.includes('event.html?')){
        renderEventInfo();
    }
}