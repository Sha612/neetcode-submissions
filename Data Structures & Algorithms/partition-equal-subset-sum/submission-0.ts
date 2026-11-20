class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const totalSum = nums.reduce((acc, num) => acc + num, 0);

        if (totalSum % 2 !== 0) {
            return false;
        }

        const target = totalSum / 2;
        const dp: boolean[] = new Array(target + 1).fill(false);
        dp[0] = true;

        for (const num of nums) {
            for (let s = target; s >= num; s--) {
                if (dp[s - num]) {
                    dp[s] = true;
                }
            }

            if (dp[target]) {
                return true;
            }
        }

        return dp[target];
    }
}
