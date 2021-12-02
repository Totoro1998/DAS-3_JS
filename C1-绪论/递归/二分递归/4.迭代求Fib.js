//  采用动态规划的策略
const fibI = (n) => {
    let pre = 0;
    let result = 1;
    while (1 < n--) {
        result += pre
        pre = result -  pre
    }
    return result;
}
console.log(fibI(6))