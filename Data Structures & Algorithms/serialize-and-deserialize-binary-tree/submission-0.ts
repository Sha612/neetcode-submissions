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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const segments: string[] = [];

        function runDFS(node: TreeNode | null): void {
            // Base Case: write sentinel value for empty branches
            if (node === null) {
                segments.push("#");
                return;
            }

            // Pre-order sequence: Root -> Left -> Right
            segments.push(node.val.toString());
            runDFS(node.left);
            runDFS(node.right);
        }

        runDFS(root);
        return segments.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        // Split the stream back into individual node tokens
        const tokens = data.split(",");
        let currentTokenIdx = 0;

        function buildTree(): TreeNode | null {
            // Fallback or out of bounds protection
            if (currentTokenIdx >= tokens.length) return null;

            const currentValStr = tokens[currentTokenIdx++];

            // If the token matches our sentinel marker, this branch terminates
            if (currentValStr === "#") {
                return null;
            }

            // Reconstruct the current root node
            const root = new TreeNode(parseInt(currentValStr, 10));

            // Recursively restore left and right subtrees in chronological order
            root.left = buildTree();
            root.right = buildTree();

            return root;
        }

        return buildTree();
    }
}
