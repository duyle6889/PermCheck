// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    A.sort((a, b) => a - b);
    let n = A.length;
    for (let i = 0; i < n - 1; i++) {
        if (A[i] + 1 != A[i + 1]) {
            return 0;
        }
    }
    return 1;
}
