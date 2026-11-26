class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        let jumps =0;
        let l=0;
        let r=0;
        while (r<nums.length-1){
            let farthest =0;
            for (let i=l;i<=r;i++){
                farthest = Math.max(farthest, i+nums[i])
            }
            l = r+1;
            r = farthest;
            jumps++;
        }
        return jumps;
    }
}
