class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result:string="";
        for (let i=0;i<strs.length;i++){
            const word = strs[i];
            result+=word.length + "#" + word;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result:string[]=[];
        let i:number = 0;
        while (i<str.length){
            let j:number =i;
            while (str[j] !=="#"){
                j++;
            }
            const lengthOfWord:number = Number(str.substring(i,j));
            i=j+1;
            const originalWord:string = str.substring(i,i+lengthOfWord);
            result.push(originalWord);
            i +=lengthOfWord;
        }
        return result;
    }
}
