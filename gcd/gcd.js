process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    lines.push(line);
});

reader.on('close', () => {
    // 最大公約数を求めるための2つの自然数
    let A = 48;
    let B = 32;

    console.log("1.");
    function gcd1(a, b) {
        if(b == 0) {
            return a;
        } else {
            return gcd1(b, a % b);
        }
    }
    console.log(gcd1(A, B));
});
