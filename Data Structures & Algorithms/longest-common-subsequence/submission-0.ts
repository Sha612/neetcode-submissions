class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        // Ensure text2 is the shorter string to minimize space usage
        if (text1.length < text2.length) {
            [text1, text2] = [text2, text1];
        }

        const m = text1.length;
        const n = text2.length;
        const dp: number[] = new Array(n + 1).fill(0);

        for (let i = 1; i <= m; i++) {
            let prevDiag = 0; // Represents dp[i - 1][j - 1]

            for (let j = 1; j <= n; j++) {
                const temp = dp[j]; // Save dp[i - 1][j] before overwriting

                if (text1[i - 1] === text2[j - 1]) {
                    dp[j] = 1 + prevDiag;
                } else {
                    dp[j] = Math.max(dp[j], dp[j - 1]);
                }

                prevDiag = temp;
            }
        }

        return dp[n];
    }
}
