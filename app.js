function SwapStrings(str, a, b) {
    var pos = 0;
    var res = "";
    for (;;) {
        var i_a = str.indexOf(a, pos);
        var i_b = str.indexOf(b, pos);
        if (i_b < 0 && i_a < 0) {
            res += str.substr(pos);
            break;
        }
        if (i_a < 0 || i_b < i_a) {
            res += str.substring(pos, i_b);
            res += a; // swap
            pos = i_b + b.length;
            continue;
        }
        if (i_b < 0 || i_a < i_b) {
            res += str.substring(pos, i_a);
            res += b; // swap
            pos = i_a + a.length;
            continue;
        }
    }
    return res;
}
function Swapper(a_elem, b_elem, input_elem, output_elem) {
    var input = input_elem.textContent;
    var a = a_elem.value;
    var b = b_elem.value;
    if (input == null || input.length == 0) {
        output_elem.innerText = "";
        return;
    }
    if (a == null || a.length == 0 || b == null || b.length == 0) {
        return;
    }
    var res = SwapStrings(input, a, b);
    output_elem.value = res;
}
function Update() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    Swapper(a, b, input, output);
}
window.onload = function () {
    var btn = document.getElementById('btnUpdate');
    btn.onclick = Update;
    Update();
    var a = document.getElementById('a');
    a.onchange = Update;
    var b = document.getElementById('b');
    b.onchange = Update;
    var input = document.getElementById('input');
    input.onchange = Update;
};
//# sourceMappingURL=app.js.map