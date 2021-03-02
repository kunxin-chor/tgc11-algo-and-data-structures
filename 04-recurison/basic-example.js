// for (let i=0; i < 10; i++) {
//     console.log(i);
// }

function countUp(start, end) {
    console.log(start);
    if (start == end) {
        return;
    }
    countUp(start+1, end);
}

function summation(n) {
    if (n==1) {
        return 1;
    }
    return n + summation(n-1);
}

countUp(0, 9);