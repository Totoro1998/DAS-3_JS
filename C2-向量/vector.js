/**
 * ++i 是先加后赋值, i++是先赋值后加值
 */
class Vector{
    #DEFAULT_CAPACITY = 3; //默认的初始容量（实际应用中可讴置为更大）
    #size   //规模
    #capacity   //容量
    #elem //数据区
    //复制数组区间
    copyFrom(arr) {
        this.#elem = Array.of(...arr);
        this.#size = arr.length;
        this.#expand()
    }
    //空间不足时扩容
    #expand() {
        if (this.#size < this.#capacity) { return }
        if (this.#capacity < this.#DEFAULT_CAPACITY) { this.#capacity = this.#DEFAULT_CAPACITY }
        let oldElem = this.#elem
        this.#capacity = this.#capacity * 2
        this.#elem = Array(this.#capacity * 2)  //两倍扩容
        for (let i = 0; i < this.#size; i++){
            this.#elem[i] = oldElem[i]
        }
        oldElem = null
    }
    //装填因子过小时压缩
    #shrink() {
        if (this.#capacity < this.#DEFAULT_CAPACITY) {
            this.#capacity = this.#DEFAULT_CAPACITY
            return
        }
        // 以25%为界
        if ((this.#size << 2) > this.#capacity) {
            return
        }
        let oldElem = this.#elem
        this.#capacity = this.#capacity / 2 
        for (let i = 0; i < this.#size; i++){
            this.#elem[i] = oldElem[i]
        }
        oldElem = null

    }
    //扫描交换
    #bubble(lo,hi) {
        
    }
    //起泡排序算法
    #bubbleSort(lo, hi) {
         const bubbleA = (lo,hi) => {
            let sorted = true //整体有序标志
            while (++lo < hi) {
                if (this.#elem[lo - 1] > this.#elem[lo]) {
                    sorted = false
                    [this.#elem[lo - 1],this.#elem[lo]] = [this.#elem[lo],this.#elem[lo - 1]]
                }
            }
            return sorted
         }
        const bubbleB = (lo, hi) => { 
            let last = lo
            while (++lo < hi) {
                if (this.#elem[lo - 1] > this.#elem[lo]) {
                    last = lo
                    [this.#elem[lo - 1],this.#elem[lo]] = [this.#elem[lo],this.#elem[lo - 1]]
                }
            }
            return last
        }
        //while (!bubbleA(lo, hi--));
        while (lo < (hi = bubbleB(lo, hi)));
    }
    //选择最大元素
    #max(lo,hi) {
    }
    //选择排序算法
    #selectionSort(lo,hi) {
        
    }
    //归并算法
    #merge(lo, mid, hi) {
        let A = this.#elem.split(lo, hi)
        let B = this.#elem.split(lo, mid)
        let C = this.#elem.split(mid, hi)
        const lb = mid - lo
        const lc = hi - mid
        for (let i = 0, j = 0, k = 0; (j < lb) || (k < lc);){
            if ((j < lb) && (!(k < lc) || (B[j] <= C[k]))) A[i++] = B[j++];
            if ((k < lc) && (!(j < lb) || (C[k] < B[k]))) A[i++] = C[k++];
        }
    }
    //归并排序算法
    #mergeSort(lo, hi) {
        if (hi - lo < 1) return;
        let mid = (hi + lo) / 2;
        this.#mergeSort(lo, mid);
        this.#mergeSort(mid, hi);
        this.#merge(lo, mid, hi);
    }
    //轴点构造算法
    #partition(lo,hi) {
        
    }
    //快速排序算法
    #quickSort(lo,hi) {
        
    }
    //堆排序
    #heapSort(lo,hi) {
        
    }
    //容量为capacity、规模为s、所有元素初始化为v
    constructor(capacity = this.#DEFAULT_CAPACITY, size = 0, v = 0) {
        this.#capacity = capacity
        this.#size = size
        this.#elem = Array(this.#size)
        for (let i = 0; i < this.#size; i++){
            this.#elem[i] = v 
        }
    }
    //规模
    size() {
        return this.#size
    }
    //判空
    empty() {
        return !this.#size
    }
    //判断向量是否已经排序
    disordered() {
        let n = 0;
        //递增排序
        for (let i = 1; i < this.#size; i++){
            if (this.#elem[i - 1] > this.#elem[i]) {
                n++
            }
        }
        return n === 0
    }
    //无序向量整体查找
    find(e) {
        
    }
    get() {
        return this.#elem
    }
    //无序向量区间查找
    findRange(e, lo, hi) {
        let index = -1
        for (let i = lo; i < hi; i++){
            if (this.#elem[i] === e) {
                index = i
                break;
            }
        }
        return index
    }
    //有序向量整体查找
    search() {
        
    }
    //二分查找A
    binSearchA(arr, e,lo, hi) { 
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (e < arr[mid]) {
                hi = mid
            }else if (arr[mid] < e) {
                lo = mid+1
            } else {
                return mid
            }
        }
        return -1
    }
    //二分查找B
    binSearchB(arr, e,lo, hi) { 
        while (1<hi-lo) { //有效区间的宽度缩短为1时，算法才会终止
            const mid = (lo + hi) >> 1; // 以中心为轴点，经比较后确定深入
            e < arr[mid] ? (hi = mid) : (lo = mid) // [lo,mid) 或[mid,hi)
        } //出口时hi = lo +1 查找区间仅含arr[lo]
        return (e===arr[lo]) ? lo : -1
    }
    //二分查找C
    binSearchC(arr, e,lo, hi) { 
        while (lo<hi) {
            const mid = (lo + hi) >> 1; // 以中心为轴点，经比较后确定深入
            e < arr[mid] ? (hi = mid) : (lo = mid+1) // [lo,mid) 或(mid,hi)
        }
        return --lo
    }
    //Fibonacci查找
    fibSearch() { }
    //删除秩为r的元素
    remove(r) {
        this.removeRange(r, r + 1)
        return r 
    }
    //初除秩在区间[lo, hi)内的元素
    removeRange(lo, hi) {
        if (lo === hi) { return }
        while (hi < this.#size) {
            this.#elem[lo] = this.#elem[hi];
            lo++; hi++;
        }
        this.#size = lo;
        this.#elem.length = this.#size
        this.#shrink();
        return hi - lo
    }
    //插入元素
    insert(r, e) {
        this.#expand()
        for (let i = this.#size; i > r; i--){
            this.#elem[i] = this.#elem[i-1]
        }
        this.#elem[r] = e
        this.#size +=1
    }
    //对[lo, hi)排序
    sort(lo,hi) {
        
    }
    //对整体排序
    sortAll() {
        
    }
    //对[lo, hi)置乱
    unsort(lo, hi) {
        //arr[n] 与arr[0,n-1]中的某一个元素进行交换
        for (let i = hi - lo; i > 0; i--){
            const k = Math.floor(Math.random() * (i)) + lo;
            [this.#elem[i+lo],this.#elem[k]] = [this.#elem[k],this.#elem[i+lo]]
        }
    }
    //对整体置乱
    unsort() {
        
    }
    //无序去重
    deduplicate() {
        let oleSize = this.#size
        let i = 1
        while (i < oleSize) {
            this.findRange(this.#elem[i], 0, i) !== -1 && this.remove(i)
            i++
        }
        return oleSize - this.#size
    }
    //有序去重
    uniquify() {
        let i = 0
        let j = 1
        while (j < this.#size) {
            if (this.#elem[j] !== this.#elem[i]) {
                this.#elem[i + 1] = this.#elem[j]
                i++
            }
            j++
        }
    }
    //遍历
    traverse() {
        
    }
}
const test = new Vector(20)
test.copyFrom([1,8,4,7,5,6,2,4])
test.deduplicate()
console.log(test.get())