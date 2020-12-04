function helloWorld(){
    let x = "Hello World";
    alert(x);
}
function counting(){
    for(let i = 0;i<10;i++){
        let out = out +i;
        document.getElementById("count").innerText = "out";
        //alert(out+"")
    }
}
window.onload = counting;