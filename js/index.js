function q1() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var n3 = document.getElementById("num3").value;
    var n4 = document.getElementById("num4").value;
    var n5 = document.getElementById("num5").value;
    var maior = Math.max(n1, n2, n3, n4, n5);
    var menor = Math.min(n1, n2, n3, n4, n5);
    alert("Maior: " + maior + "\n" + "Menor: " + menor);
}