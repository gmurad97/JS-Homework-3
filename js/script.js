function getRandomNumber(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

function rstColor() {
    let domSpanTags = document.getElementsByTagName("span");
    for (let domSpanTag of domSpanTags) {
        domSpanTag.style.color = "rgb(0, 0, 0)";
    }
}

/*BEGIN - VARIANT 1*/

let arrSpan = document.getElementsByClassName("variant")[0].getElementsByTagName("span");
for (let spn of arrSpan) {
    spn.onclick = () => {
        if (window.getComputedStyle(spn).color === "rgb(0, 0, 0)") {
            spn.style.color = "rgb(154, 59, 177)";
        }
        else {
            spn.style.color = "rgb(0, 0, 0)";
        }
    }
}

/*ENDED - VARIANT 1*/

/*BEGIN - VARIANT 2*/
let variantContainer2 = document.getElementsByClassName("variant")[1];
let spnInnerText2 = variantContainer2.getElementsByTagName("span")[0].innerText;
variantContainer2.getElementsByTagName("span")[0].remove();

for (let x = 0; x <= spnInnerText2.length - 1; x++) {
    let domTag = document.createElement("span");
    domTag.innerText = spnInnerText2[x];
    variantContainer2.appendChild(domTag);
}

for (let spn of variantContainer2.getElementsByTagName("span")) {
    spn.onclick = () => {
        if (window.getComputedStyle(spn).color === "rgb(0, 0, 0)") {
            spn.style.color = "rgb(0, 72, 186)";
        }
        else {
            spn.style.color = "rgb(0, 0, 0)";
        }
    }
}

/*ENDED - VARIANT 2*/

/*BEGIN - VARIANT 3*/
let variantContainer3 = document.getElementsByClassName("variant")[2];
let spnInnerText3 = variantContainer3.getElementsByTagName("span")[0].innerText;
variantContainer3.getElementsByTagName("span")[0].remove();

for (let x = 0; x <= spnInnerText3.length - 1; x++) {
    let domTag = document.createElement("span");
    domTag.innerText = spnInnerText3[x];
    variantContainer3.appendChild(domTag);
}

for (let spn of variantContainer3.getElementsByTagName("span")) {
    spn.onclick = () => {
        if (window.getComputedStyle(spn).color === "rgb(0, 0, 0)") {
            spn.style.color = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
        }
        else {
            spn.style.color = "rgb(0, 0, 0)";
        }
    }
}
/*ENDED - VARIANT 3*/