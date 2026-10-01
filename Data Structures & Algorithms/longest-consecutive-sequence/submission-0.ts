class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet:Set<number>=new Set<number>(nums);
        let longestStreak:number=0;
        for(const num of nums){
            if (!numSet.has(num-1)){
                let currentNum:number=num;
                let currentStreak:number=1;
                while(numSet.has(currentNum+1)){
                    currentNum+=1;
                    currentStreak+=1;
                }
                if (currentStreak>longestStreak) {
                    longestStreak=currentStreak
                }
            }
        }
        return longestStreak;
    }
}
