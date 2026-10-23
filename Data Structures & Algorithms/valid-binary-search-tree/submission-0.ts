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
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
        function validate(node: TreeNode | null, min: number | null, max: number | null): boolean {
            // Base Case: An empty tree or reaching past a leaf node is perfectly valid
            if (node === null) return true;

            // Check if the current node breaks out of its allocated global boundary range
            if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
                return false;
            }

            // Recursively validate left and right subtrees with updated bounds
            // Going left: max bound updates to current node value
            // Going right: min bound updates to current node value
            return validate(node.left, min, node.val) && validate(node.right, node.val, max);
        }

        // Initialize with null boundaries representing infinity (-Infinity, Infinity)
        return validate(root, null, null);
    }
}
