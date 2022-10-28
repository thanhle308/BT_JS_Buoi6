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