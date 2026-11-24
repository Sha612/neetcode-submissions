class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let currentSum = nums.at(0)!;
        let maxSum = nums.at(0)!;

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];
            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
