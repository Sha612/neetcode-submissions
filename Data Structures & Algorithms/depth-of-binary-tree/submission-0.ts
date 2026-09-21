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
    maxDepth(root: TreeNode | null): number {
        if (root === null){
            return 0;
        }

        const leftDepth:number = this.maxDepth(root.left);
        const rightDepth:number = this.maxDepth(root.right);

        return Math.max(leftDepth,rightDepth) + 1;
    }
}
