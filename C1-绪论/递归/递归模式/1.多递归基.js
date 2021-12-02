const reverse = (arr, lo, hi) => {
    !lo & (lo = 0)
    !hi & (hi = (arr.length - 1))
    const fn = (arr, lo, hi) => {
        if (lo < hi) {
            [arr[lo],arr[hi]] = [arr[hi],arr[lo]]
            fn(arr,lo+1,hi-1)
        }
    }
    fn(arr, lo, hi)
    return arr
}
const arr_list = [1, 2, 3, 4, 5, 6, 7]
console.log(reverse(arr_list))

