class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const visitedNum:Set<number> = new Set<number>();
        for (let i:number=0;i<nums.length;i++){
            const currentNum:number=nums[i];
            if(visitedNum.has(currentNum)) return true;
            visitedNum.add(currentNum);
        }
        return false;
    }
}
