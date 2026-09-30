class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        const result = new Array(len).fill(1);
        let leftProduct=1;
        for(let i=0;i<len;i++){
            result[i]=leftProduct;
            leftProduct*=nums[i];
        }
        let rightProduct=1;
        for(let i=len-1;i>=0;i--){
            result[i]*=rightProduct;
            rightProduct*=nums[i];
        }
        return result;
    }
}
