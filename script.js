function mewElement(){
    let li = document.createElement("li")
    let inputValue = document.getElementById("getInput").value;
    let a = document.createTextNode(inputValue)
    li.appendChild(a)
    if(inputValue == " "){
        alert("You must write something!")
    }
    else{
        document.getElementById("displayList").appendChild(li)
    }

    document.getElementById("getInput").value;

    // let span = document.createElement("SPAN")
    // let txt = document.createTextNode("\u00D7");

    span.className = "close"
    span.appendChild(txt)
    li.appendChild(span)

    for(i=0; i<close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement
            div.style.display = "none";
        }
    }

    getInput.value = ""
}