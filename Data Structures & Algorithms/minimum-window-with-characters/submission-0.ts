class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (s.length === 0 || t.length === 0 || s.length < t.length) {
        return "";
    }

    const targetCounts = new Array(128).fill(0);
    for (let i = 0; i < t.length; i++) {
        targetCounts[t.charCodeAt(i)]++;
    }

    const windowCounts = new Array(128).fill(0);

    let requiredMatches = 0;
    for (let i = 0; i < 128; i++) {
        if (targetCounts[i] > 0) requiredMatches++;
    }

    let formedMatches = 0;

    let left = 0;
    let minLen = Infinity;
    let minLeft = 0; 
    for (let right = 0; right < s.length; right++) {
        const rightCharCode = s.charCodeAt(right);
        windowCounts[rightCharCode]++;

        if (targetCounts[rightCharCode] > 0 && windowCounts[rightCharCode] === targetCounts[rightCharCode]) {
            formedMatches++;
        }

        while (formedMatches === requiredMatches) {
            const currentWindowSize = right - left + 1;
            

            if (currentWindowSize < minLen) {
                minLen = currentWindowSize;
                minLeft = left;
            }

            const leftCharCode = s.charCodeAt(left);
            windowCounts[leftCharCode]--;

            if (targetCounts[leftCharCode] > 0 && windowCounts[leftCharCode] < targetCounts[leftCharCode]) {
                formedMatches--;
            }

            left++;
        }
    }
    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);

    }
}
