// Bài 1
function timSo() {
    var sum = 0, n = 0;
    for (var i = 1; i < 5000; i++) {
        sum += i;
        if (sum > 10000) {
            document.getElementById("txt1").innerHTML = "N = " + i;
            break;
        }
    }
}
document.getElementById("btn1").onclick = timSo;

// Bài 2
function sumS() {
    var sum = 0;
    var x = Number(document.getElementById('x').value);
    var n = Number(document.getElementById('n').value);
    for (var i = 1; i <= n; i++) {
        sum += x ** i;
    }
    document.getElementById('txt2').innerHTML = " S(n) = " + sum;
}
document.getElementById("btnsum").onclick = sumS;

// Bài 3
function giaiThua() {
    var n = Number(document.getElementById('ngt').value);
    var sum = 1;
    if (n == 0) {
        sum = 1;
        document.getElementById('txt3').innerHTML = "Giai thừa của " + n + " = " + sum;
    } else if (n > 0) {
        for (var i = 1; i <= n; i++) {
            sum = sum * i;
        }
        document.getElementById('txt3').innerHTML = "Giai thừa của " + n + " = " + sum;
    } else {
        document.getElementById('txt3').innerHTML = "Giai thừa của phải là số n lớn hơn hoặc bằng 0";
    }
}
document.getElementById("btngt").onclick = giaiThua;

// Bài 4
function css10() {
    var div = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log('chan1');
            div += "<div style='background :red ; color : white; height: 50px; ' id= 'chan' >Div chẵn </div>";

        } else {
            console.log('le1');
            div += "<div style='background :blue ; color : white;height: 50px;' id= 'le'>Div Lẻ</div>";
        }
    }
    document.getElementById('colordiv').innerHTML = div;
}
document.getElementById('btnclick').onclick = css10;