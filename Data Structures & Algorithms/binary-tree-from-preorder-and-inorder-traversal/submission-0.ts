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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inorderMap = new Map<number, number>();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        // Keep track of our current position in the preorder traversal globally
        let preIdx = 0;

        // Recursive helper function that uses boundary pointers
        function arrayToTree(leftBound: number, rightBound: number): TreeNode | null {
            // Base case: If boundaries cross, this subtree is empty
            if (leftBound > rightBound) return null;

            // The first element in preorder within our current context is the root
            const rootVal = preorder[preIdx];
            const root = new TreeNode(rootVal);
            preIdx++; // Advance the pointer for the next recursive frame

            // Look up the root's position in inorder to find the splitting point
            const mid = inorderMap.get(rootVal)!;

            // Recursively build the subtrees
            // Left subtree boundaries: elements from leftBound up to mid - 1
            root.left = arrayToTree(leftBound, mid - 1);

            // Right subtree boundaries: elements from mid + 1 up to rightBound
            root.right = arrayToTree(mid + 1, rightBound);

            return root;
        }

        // Initialize the recursive loop with the full scope of the inorder array
        return arrayToTree(0, inorder.length - 1);
    }
}
