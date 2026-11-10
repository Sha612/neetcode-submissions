class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        // Base cases
        if (n <= 2) return n;

        let oneStepAway = 2; // Ways to reach step 2
        let twoStepsAway = 1; // Ways to reach step 1
        let allWays = 0;

        for (let i = 3; i <= n; i++) {
            allWays = oneStepAway + twoStepsAway;
            
            // Move pointers forward for the next step iteration
            twoStepsAway = oneStepAway;
            oneStepAway = allWays;
        }

        return allWays;
    }
}
