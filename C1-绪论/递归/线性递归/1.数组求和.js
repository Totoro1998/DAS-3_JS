const sum = (arr, length) => {
    if (1 > length) {
        return 0
    }
    return sum(arr,length-1) + arr[length-1]
}