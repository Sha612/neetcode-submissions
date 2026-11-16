class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;

        // Use amount + 1 as an unreachable sentinel value
        const dp = new Int32Array(amount + 1).fill(amount + 1);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                if (coin <= i) {
                    const candidate = dp[i - coin] + 1;
                    if (candidate < dp[i]) {
                        dp[i] = candidate;
                    }
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
