class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let prev2 = 0; // Max loot up to house i - 2
        let prev1 = 0; // Max loot up to house i - 1

        for (const num of nums) {
            const current = Math.max(prev1, prev2 + num);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
