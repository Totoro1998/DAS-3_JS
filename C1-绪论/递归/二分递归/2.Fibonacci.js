// 第n项
const fib = (n) => {
    return n<2 ? n : fib(n-1)+fib(n-2)
}
console.log(fib(3))

/** 
 * 然而不幸的是，在这种场合采用二分递归策略的效率极其低下。实际上,该算法需要运行指数型的时间才能
计算出第n个Fibonacci数。
*/