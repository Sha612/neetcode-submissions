/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        // Initialize our global maximum tracker with the lowest possible value
    let globalMaxSum = -Infinity;

    // Post-order DFS helper function
    function calculateMaxGain(node: TreeNode | null): number {
        // Base case: An empty node contributes 0 to any path sum
        if (node === null) return 0;

        // Recursively compute the maximum path gains of the left and right subtrees.
        // If a subtree returns a negative value, we prune it by dropping it to 0.
        const leftGain = Math.max(0, calculateMaxGain(node.left));
        const rightGain = Math.max(0, calculateMaxGain(node.right));

        // Calculate the maximum possible path sum if we choose to make this node 
        // the peak/turning point of the path (combining left, current, and right).
        const currentLocalPathSum = node.val + leftGain + rightGain;

        // Update our global record if this local arch is the highest found so far
        globalMaxSum = Math.max(globalMaxSum, currentLocalPathSum);

        // Return the maximum single-branch gain to the parent frame.
        // The parent can only continue the path through either the left OR right branch.
        return node.val + Math.max(leftGain, rightGain);
    }

    // Launch the traversal from the root node
    calculateMaxGain(root);

    return globalMaxSum;
    }
}
