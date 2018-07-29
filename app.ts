function SwapStrings(str: string, a: string, b: string): string {
    var pos: number = 0;
    var res: string = ""
    

    for (; ;) {
        var i_a = str.indexOf(a, pos);
        var i_b = str.indexOf(b, pos);

        if (i_b < 0 && i_a < 0) { // no more matches
            res += str.substr(pos);
            break;
        }

        if (i_a < 0 || i_b < i_a) { // next match b
            res += str.substring(pos, i_b);
            res += a; // swap
            pos = i_b + b.length;
            continue;
        }

        if (i_b < 0 || i_a < i_b) { // next match a
            res += str.substring(pos, i_a);
            res += b; // swap
            pos = i_a + a.length;
            continue;
        }
    }
    return res
}


class Swapper {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "Swap hej/hopp in hejsan hoppsan: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = SwapStrings("hejsan hoppsan toppsan", "hej", "hopp");
    }

    start() {
        // this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var pgm = new Swapper(el);
    pgm.start();
};