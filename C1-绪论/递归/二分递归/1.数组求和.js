const sum = (arr, lo,hi) => {
    if (lo === hi) {
        return arr[lo]
    } else {
        const mid = (lo + hi) >> 1;
        return sum(arr, lo, mid) + sum(arr, mid+1,hi)
    }
}
const arr = [1, 2, 3, 4, 5]
console.log(sum(arr,0,arr.length-1))