class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        if (s.length < 2) return s;

        let start = 0;
        let maxLen = 1;

        const expandAroundCenter = (left: number, right: number): void => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                const currentLen = right - left + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    start = left;
                }
                left--;
                right++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            // Odd-length palindromes (single center)
            expandAroundCenter(i, i);
            // Even-length palindromes (dual center)
            expandAroundCenter(i, i + 1);
        }

        return s.substring(start, start + maxLen);
    }
}
