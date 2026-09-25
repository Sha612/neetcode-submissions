class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const letterCount:Record<string,number>={};

        for (let i:number=0;i<s.length;i++){
            const char:string = s[i];
            letterCount[char]=(letterCount[char] || 0)+1;
        }
        for(let i:number=0;i<t.length;i++){
            const char:string =t[i];

            if(!letterCount[char]) return false;

            letterCount[char]--;
        }
        return true;
    } 
}
