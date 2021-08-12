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
function limites() {
    let limInf = parseInt(document.getElementById("limiteinf").value);
    let limSup = parseInt(document.getElementById("limitesup").value);
    if (isNaN(limInf)) {
        document.getElementById("limiteinf").focus();
    } else if (isNaN(limSup)) {
        document.getElementById("limitesup").focus();
    } else {
        let pares = [];
        let soma = 0;
        for (limInf; limInf <= limSup; limInf++) {
            if (limInf % 2 == 0) {
                pares.push(limInf);
                soma = soma + limInf;
            }
        }
        alert("Numeros pares: " + pares);
        alert("Soma dos números pares: " + soma);
    }
}
function ordem() {
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let num3 = parseInt(document.getElementById("n3").value);
    if (isNaN(num1)) {
        document.getElementById("n1").focus();
    } else if (isNaN(num2)) {
        document.getElementById("n2").focus();
    } else if (isNaN(num3)) {
        document.getElementById("n3").focus();
    } else {
        let ordena = [num1, num2, num3];
        ordena.sort((a, b) => a - b);
        alert("Ordem crescente: " + ordena);
    }
}
function positivo_negativo() {
    let nump = parseInt(document.getElementById("post").value);
    if (isNaN(nump)) {
        document.getElementById("post").focus();
    } else {
        let positivo = Boolean(nump >= 0);
        alert(positivo);
    }
}
function par_impar() {
    let numpar = parseInt(document.getElementById("npar").value);
    if (isNaN(numpar)) {
        document.getElementById("npar").focus();
    } else {
        let par = Boolean(numpar % 2 == 0);
        alert(par);
    }
}