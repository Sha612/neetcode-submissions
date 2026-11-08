class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        // Union-Find with path compression + union by size
        const parent = new Int32Array(n);
        const size = new Int32Array(n).fill(1);
        for (let i = 0; i < n; i++) parent[i] = i;

        const find = (x: number): number => {
            while (parent[x] !== x) {
                parent[x] = parent[parent[x]]; // path halving
                x = parent[x];
            }
            return x;
        };

        let components = n;
        for (const [a, b] of edges) {
            let ra = find(a);
            let rb = find(b);
            if (ra === rb) continue; // already connected

            if (size[ra] < size[rb]) [ra, rb] = [rb, ra];
            parent[rb] = ra;
            size[ra] += size[rb];
            components--; // two components merged into one
        }
        return components;
    }
}