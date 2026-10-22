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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const result: number[][] = [];
        if (root === null) return result;

        // 1. Initialize the queue with the root node
        const queue: TreeNode[] = [root];

        // 2. Loop runs once for every unique level depth layer
        while (queue.length > 0) {
            const levelSize = queue.length; // Capture snapshot of current level's node count
            const currentLevel: number[] = [];

            // 3. Inner loop explicitly processes only nodes belonging to the current layer
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()!; // Pop front node from queue

                currentLevel.push(currentNode.val);

                // Push children to queue for the next depth layer iteration
                if (currentNode.left !== null) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right);
                }
            }

            // 4. Append completed level array to final collection grid
            result.push(currentLevel);
        }

        return result;
    }
}
