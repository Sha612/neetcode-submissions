/**
 * // Definition for a Node.
 * class Node {
 *     val: number;
 *     neighbors: Node[];
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node | null} node
     * @return {Node | null}
     */
    cloneGraph(node: Node | null): Node | null {
        if (!node) return null;

        // Maps the original node's value (or object reference) to the cloned node instance
        const visited = new Map<number, Node>();

        function dfs(currentNode: Node): Node {
            // If we have already cloned this node, return the cached clone to resolve graph cycles
            if (visited.has(currentNode.val)) {
                return visited.get(currentNode.val)!;
            }

            // Create a deep copy shell for the current node
            const clone = new Node(currentNode.val);
            visited.set(currentNode.val, clone);

            // Populate the clone's neighbor collection by recursively traveling the original edges
            for (const neighbor of currentNode.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        }

        return dfs(node);
    }
}
