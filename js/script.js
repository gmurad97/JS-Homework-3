/*BEGIN - VARIANT 1*/

let arrSpan = document.getElementsByClassName("variant")[0].getElementsByTagName("span");
for (let spn of arrSpan) {
    spn.onclick = () => {
        if(window.getComputedStyle(spn).color === "rgb(0, 0, 0)"){
            spn.style.color = "rgb(170, 0, 0)";
        }
        else{
            spn.style.color = "rgb(0, 0, 0)";
        }
    }
}

/*ENDED - VARIANT 1*/

/*BEGIN - VARIANT 2*/
let variantContainer = document.getElementsByClassName("variant")[1];
let spnInnerText = variantContainer.getElementsByTagName("span")[0].innerText;
variantContainer.getElementsByTagName("span")[0].remove();

for(let x = 0; x <= spnInnerText.length - 1; x++){
    let domTag = document.createElement("span");
    domTag.innerText = spnInnerText[x];
    variantContainer.appendChild(domTag);
}

for(let spn of variantContainer.getElementsByTagName("span")){
    spn.onclick = () => {
        if(window.getComputedStyle(spn).color === "rgb(0, 0, 0)"){
            spn.style.color = "rgb(170, 0, 0)";
        }
        else{
            spn.style.color = "rgb(0, 0, 0)";
        }
    }
}

/*ENDED - VARIANT 2*/