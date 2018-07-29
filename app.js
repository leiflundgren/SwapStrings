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
var Swapper = /** @class */ (function () {
    function Swapper(element) {
        this.element = element;
        this.element.innerHTML += "Swap hej/hopp in hejsan hoppsan: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = SwapStrings("hejsan hoppsan toppsan", "hej", "hopp");
    }
    Swapper.prototype.start = function () {
        // this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    };
    Swapper.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Swapper;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var pgm = new Swapper(el);
    pgm.start();
};
//# sourceMappingURL=app.js.map