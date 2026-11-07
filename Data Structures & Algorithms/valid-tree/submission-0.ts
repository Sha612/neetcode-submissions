class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        // A valid tree with n nodes cannot have more than n - 1 edges
        if (edges.length !== n - 1) {
            return false;
        }

        // Build the Adjacency List for our undirected graph structure
        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set<number>();
        // Queue stores tuple elements: [current_node, parent_node]
        const q: [number, number][] = [[0, -1]]; 
        visit.add(0);

        // Track pointer index for O(1) removals instead of unoptimized array shifts
        let headPointer = 0;

        while (headPointer < q.length) {
            const [node, parent] = q[headPointer++];

            for (const nei of adj[node]) {
                // Skip the direct backtracking edge leading to its immediate parent
                if (nei === parent) continue;

                // Alternate cross-edge pathway found -> Cycle detected!
                if (visit.has(nei)) return false;

                visit.add(nei);
                q.push([nei, node]);
            }
        }

        // The graph is valid if our scan reached every individual node
        return visit.size === n;
    }
}
