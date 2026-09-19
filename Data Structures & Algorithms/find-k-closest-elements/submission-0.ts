class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr: number[], k: number, x: number): number[] {
        let left:number = 0;
        let right:number = arr.length - 1;
        while (left < right){
            const mid:number = Math.floor((left+right)/2);

            if (x - arr[mid] > arr[mid + k]-x){
                left = mid + 1;
            }else{
                right =mid;
            }
        }
return arr.slice(left,left+k);
    }
    
}
