function maior_menor() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = document.getElementById("num3").value;
    var n4 = document.getElementById("num4").value;
    var n5 = document.getElementById("num5").value;
    if (n1 === "") {
        document.getElementById("num1").focus();
    } else if (n2 === "") {
        document.getElementById("num2").focus();
    } else if (n3 === "") {
        document.getElementById("num3").focus();
    } else if (n4 === "") {
        document.getElementById("num4").focus();
    } else if (n5 === "") {
        document.getElementById("num5").focus();
    } else {
        var maior = Math.max(parseInt(n1), parseInt(n2), parseInt(n3), parseInt(n4), parseInt(n5));
        var menor = Math.min(parseInt(n1), parseInt(n2), parseInt(n3), parseInt(n4), parseInt(n5));
        alert("Maior: " + maior + "\n" + "Menor: " + menor);
    }
}
function vogal() {
    var caracter = String(document.getElementById("caractere").value);
    if (caracter === "") {
        document.getElementById("caractere").focus();
    } else if (!(isNaN(parseInt(caracter)))) {
        document.getElementById("caractere").focus();
    } else {
        caracter = caracter.toUpperCase();
        if (caracter === "A" || caracter === "E" || caracter === "I" || caracter === "O" || caracter === "U") {
            alert(1);
        } else {
            alert(0);
        }
    }
}