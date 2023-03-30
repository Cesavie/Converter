function multToMm() {
    let firstValue = document.getElementById("inchesToMm").value;
    let ans = parseFloat(firstValue) * parseFloat(25.4)

    document.getElementById("displayAnsMm").innerHTML = ans + "mm"; 
}

function multToFt() {
    let firstValue = document.getElementById("inchesToFt").value;
    let ans = parseFloat(firstValue) * parseFloat(0.083)

    document.getElementById("displayAnsFt").innerHTML = ans + "ft"; 
}

function multToYd() {
    let firstValue = document.getElementById("inchesToYd").value;
    let ans = parseFloat(firstValue) * parseFloat(0.027)

    document.getElementById("displayAnsYd").innerHTML = ans + "yd"; 
}


