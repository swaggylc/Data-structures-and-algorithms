function move(a, b) {
    console.log(a + '->' + b);
}

let start = 'start'
let center = 'center'
let end = 'end'

function HanNuoTa(n, start, center, end) {
    if (n == 1) {
        move(start, end)
    } else {
        HanNuoTa(n - 1, start, end, center)
        move(start, end)
        HanNuoTa(n - 1, center, start, end)
    }
}

HanNuoTa(5, start, center, end)