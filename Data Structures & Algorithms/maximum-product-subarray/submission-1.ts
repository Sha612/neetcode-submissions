class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let maxProd: number = nums[0];
        let minProd: number = nums[0];
        let result: number = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i];

            if (curr < 0) {
                const temp = maxProd;
                maxProd = minProd;
                minProd = temp;
            }

            maxProd = Math.max(curr, curr * maxProd);
            minProd = Math.min(curr, curr * minProd);

            if (maxProd > result) {
                result = maxProd;
            }
        }

        return result;
    }
}
