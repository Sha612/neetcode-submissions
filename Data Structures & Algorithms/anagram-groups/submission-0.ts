class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group:Record<string,string[]>={};
        for(let i:number=0;i<strs.length;i++){
            const current:string=strs[i];
            const sorted:string = current.split("").sort().join("");
            if (!group[sorted]){
                group[sorted]=[];
            }
            group[sorted].push(current);

        }
        return Object.values(group);
    }
    
}
