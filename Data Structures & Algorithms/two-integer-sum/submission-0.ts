class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numToIndexMap: Record<number,number>={};
        for(let i:number=0;i<nums.length;i++){
            const current:number=nums[i];
            const complement:number=target-current;
            if(numToIndexMap[complement]!==undefined){
                return [numToIndexMap[complement],i]
            }
            numToIndexMap[current]=i;
        }
        return[];
    }
}
