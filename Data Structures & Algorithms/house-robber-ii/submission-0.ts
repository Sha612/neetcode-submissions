class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if (n === 1) return nums[0];

        return Math.max(
            this.robRange(nums, 0, n - 2),
            this.robRange(nums, 1, n - 1)
        );
    }

    private robRange(nums: number[], start: number, end: number): number {
        let prev2 = 0;
        let prev1 = 0;

        for (let i = start; i <= end; i++) {
            const current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
