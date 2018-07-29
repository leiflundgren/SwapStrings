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


function Swapper(
    a_elem: HTMLInputElement,
    b_elem: HTMLInputElement,
    input_elem: HTMLTextAreaElement,
    output_elem: HTMLTextAreaElement,
) {

    var input: string = input_elem.textContent;
    var a: string = a_elem.value;
    var b: string = b_elem.value;

    if (input == null || input.length == 0) {
        output_elem.innerText = "";
        return;
    }
    if (a == null || a.length == 0 || b == null || b.length == 0) {
        return;
    }
    var res: string = SwapStrings(input, a, b);
    output_elem.value = res
}

function Update() {
    var a = <HTMLInputElement> document.getElementById('a');
    var b = <HTMLInputElement> document.getElementById('b');
    var input = <HTMLTextAreaElement> document.getElementById('input');
    var output = <HTMLTextAreaElement> document.getElementById('output')
    Swapper(a, b, input, output);
}

window.onload = () => {


    var btn = <HTMLButtonElement>document.getElementById('btnUpdate');
    btn.onclick = Update;
    Update();    

    var a = <HTMLInputElement>document.getElementById('a');
    a.onchange = Update;
    var b = <HTMLInputElement>document.getElementById('b');
    b.onchange = Update;
    var input = <HTMLTextAreaElement>document.getElementById('input');
    input.onchange = Update;
};