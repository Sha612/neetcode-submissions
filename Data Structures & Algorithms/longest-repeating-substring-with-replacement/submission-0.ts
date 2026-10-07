class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const counts:number[]=new Array(26).fill(0);
        let left:number =0;
        let maxFrequency:number=0;
        for (let r:number=0;r<s.length;r++){
            const rightIndex = s.charCodeAt(r) - 65;
            counts[rightIndex]++;
            if (counts[rightIndex]>maxFrequency){
                maxFrequency=counts[rightIndex];
            }
            if ((r-left+1) - maxFrequency >k){
                counts[s.charCodeAt(left) - 65]--;
                left++;
            }
        }
        return s.length-left;
    }
}
