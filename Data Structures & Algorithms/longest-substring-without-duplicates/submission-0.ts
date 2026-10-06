class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet= new Set<string>();
        let l:number=0;
        let max:number=0;
        for(let r:number=0;r<s.length;r++){
            const char:string=s[r];
            while(charSet.has(char)){
                charSet.delete(s[l])
                l++;
            }
            charSet.add(char);
            const size:number=r-l+1;
            max=Math.max(size,max);
        }
        return max;
    }
}
