// 实际上，属于尾递归形式的算法，均可以简捷地转换为等效的迭代版本
const reverse = (arr, lo, hi) => {
  !lo & (lo = 0);
  !hi & (hi = arr.length - 1);
  while (lo < hi) {
    [arr[lo], arr[hi]] = [arr[hi], arr[lo]]
    lo++; hi--;
  }
  return arr;
};
const arr_list = [1, 2, 3, 4, 5, 6, 7];
console.log(reverse(arr_list));
