class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let totalPalindromes = 0;

        const expandAndCount = (left: number, right: number): void => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                totalPalindromes++;
                left--;
                right++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            // Odd-length palindromes centered at i
            expandAndCount(i, i);
            // Even-length palindromes centered between i and i + 1
            expandAndCount(i, i + 1);
        }

        return totalPalindromes;
    }
}
