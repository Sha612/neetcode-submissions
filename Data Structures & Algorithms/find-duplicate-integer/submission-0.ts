class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let tortoise = nums[0];
        let hare = nums[0];

        tortoise = nums[tortoise];
        hare = nums[nums[hare]];

        while (tortoise !== hare) {
            tortoise = nums[tortoise];
            hare = nums[nums[hare]];
        }
        hare = nums[0];
        while (tortoise !== hare) {
            tortoise = nums[tortoise];
            hare = nums[hare];
        }

        return tortoise;
    }
}
