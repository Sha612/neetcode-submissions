class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const triplets:number[][]=[];
        const len:number=nums.length;
        nums.sort((a,b)=>a-b);
        for(let i:number=0;i<len-2;i++){
            if(nums[i]>0) break;
            if(i>0 && nums[i]=== nums[i-1]) continue;
            let left:number=i+1;
            let right:number=len-1;
            while(left<right){
                const currentSum:number=nums[i]+nums[left]+nums[right];
                if(currentSum ===0){
                    triplets.push([nums[i],nums[left],nums[right]]);
                    while(left<right && nums[left]===nums[left+1]) left++;
                    while(left<right && nums[right]===nums[right-1]) right--;
                    left++;
                    right--;
                }else if(currentSum <0){
                    left++;
                }else{right--;}
            }
        }
        return triplets;
    }
    
}
