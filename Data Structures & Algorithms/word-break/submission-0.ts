class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s: string, wordDict: string[]): boolean {
        const dp: boolean[] = new Array(s.length + 1).fill(false);
        dp[0] = true;

        for (let i = 1; i <= s.length; i++) {
            for (const word of wordDict) {
                const start = i - word.length;
                if (start >= 0 && dp[start] && s.slice(start, i) === word) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length];
    }
}
