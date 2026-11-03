class Solution {
    /**
     * @param {string[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islandCount = 0;

        // Internal DFS runner to explore and submerge contiguous land mass components
        function sinkIsland(r: number, c: number): void {
            // Base Case: Out of grid bounds or hit a water cell ('0')
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
                return;
            }

            // In-place modification: Turn land into water to mark it as visited
            grid[r][c] = '0';

            // Recursively sink all 4 orthogonal neighbor coordinates
            sinkIsland(r + 1, c); // Down
            sinkIsland(r - 1, c); // Up
            sinkIsland(r, c + 1); // Right
            sinkIsland(r, c - 1); // Left
        }

        // Scan every coordinate point inside the matrix grid layout
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    islandCount++;
                    // Trigger traversal to clear out the active island block completely
                    sinkIsland(r, c);
                }
            }
        }

        return islandCount;
    }
}
