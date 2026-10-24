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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const stack: TreeNode[] = [];
        let current: TreeNode | null = root;

        // Counter to keep track of the sorted elements visited so far
        let count = 0;

        // Continue looping as long as there are nodes to process or items on the stack
        while (current !== null || stack.length > 0) {
            // 1. Go as far left as possible, pushing all parents onto the stack
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            // 2. Process the top element (smallest remaining value in this subtree)
            current = stack.pop()!;
            count++;

            // 3. Early Return: If we have reached the k-th smallest element, stop immediately
            if (count === k) {
                return current.val;
            }

            // 4. Move to the right subtree to check its larger elements
            current = current.right;
        }

        return -1;
    }
}
