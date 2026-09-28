class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap:Record<number,number>={};
        for (const num of nums){
            frequencyMap[num]=(frequencyMap[num]||0)+1;
        }
        const buckets:number[][]=Array.from({length:nums.length+1},()=>[]);

        for (const numStr in frequencyMap){
            const num=Number(numStr);
            const frequency = frequencyMap[num];
            buckets[frequency].push(num);
        }
        const result:number[]=[];
        for(let i=buckets.length-1;i>=0;i--){
            for(const num of buckets[i]){
                result.push(num);
                if (result.length === k){
                    return result;
                }
            }
        }
        return result;
    }
}
