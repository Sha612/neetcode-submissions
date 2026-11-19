class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const tails: number[] = [];

        for (const num of nums) {
            let left = 0;
            let right = tails.length;

            // Find the first element in tails >= num
            while (left < right) {
                const mid = (left + right) >> 1;
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (left === tails.length) {
                tails.push(num);
            } else {
                tails[left] = num;
            }
        }

        return tails.length;
    }
}
