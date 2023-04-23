
function print_numbers() {
    let old_div = document.getElementById("abc");
    if (old_div) {
        old_div.parentNode.removeChild(old_div);
    };
    let from =  document.getElementById("from-number").value ; 
    let to =  document.getElementById("to-number").value ;
    // document.getElementById("span").style.color = "green";
    let div = document.createElement('div');
    div.id = "abc";

    for (let i = parseInt(from); i <= parseInt(to); i++) {
        let span = document.createElement('span');
        span.className = "span";
        span.innerHTML = '<center>' + i + "^2 = " + (i * i) + '<br> </center>';
        div.appendChild(span);
    }
    document.body.appendChild(div);
    

    
}