class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        if (s[0] === '0') return 0;

        let prev2 = 1; // Ways to decode up to i - 2
        let prev1 = 1; // Ways to decode up to i - 1

        for (let i = 1; i < s.length; i++) {
            let current = 0;

            // 1. Check valid 1-digit decode ('1' to '9')
            if (s[i] !== '0') {
                current += prev1;
            }

            // 2. Check valid 2-digit decode ('10' to '26')
            const twoDigit = (s.charCodeAt(i - 1) - 48) * 10 + (s.charCodeAt(i) - 48);
            if (twoDigit >= 10 && twoDigit <= 26) {
                current += prev2;
            }

            // Unrecoverable invalid sequence (e.g., "00", "30")
            if (current === 0) return 0;

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
