const fib = (n, prev) => {
    if (n === 0) {
        prev = 1
        return 0;
    } else {
        let prePrev = 0
        prev = fib(n - 1, prePrev)
        return prePrev + prev
    }
}
console.log(fib(3))