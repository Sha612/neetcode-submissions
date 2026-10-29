class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const results: number[][] = [];
    const currentPath: number[] = [];

    function backtrack(index: number, currentSum: number): void {
        // Base Case 1: Success match found
        if (currentSum === target) {
            results.push([...currentPath]);
            return;
        }

        // Base Case 2: Out of bounds or overshot target capacity sum bound
        if (index >= nums.length || currentSum > target) {
            return;
        }

        // --- Choice 1: Include nums[index] ---
        currentPath.push(nums[index]);
        // Stay at 'index' because we can reuse the same element multiple times
        backtrack(index, currentSum + nums[index]);
        
        // Clean up the path state (Backtrack)
        currentPath.pop();

        // --- Choice 2: Exclude nums[index] ---
        // Move to the next index, abandoning any future choice of nums[index] on this branch
        backtrack(index + 1, currentSum);
    }

    backtrack(0, 0);
    return results;
    }
}
