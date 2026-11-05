class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        if (!heights || heights.length === 0 || heights[0].length === 0) return [];

        const ROWS = heights.length;
        const COLS = heights[0].length;
        const results: number[][] = [];

        // 1. Initialize reachability matrices for both oceans
        const pacificReachable = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        const atlanticReachable = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        // Core DFS engine to flow water "uphill" from the ocean borders
        function dfs(r: number, c: number, reachableMatrix: boolean[][], prevHeight: number): void {
            // Base Case: Out of grid bounds, already visited, or water cannot flow uphill
            if (
                r < 0 || c < 0 || r >= ROWS || c >= COLS || 
                reachableMatrix[r][c] || 
                heights[r][c] < prevHeight
            ) {
                return;
            }

            // Mark this cell as reachable by the active ocean
            reachableMatrix[r][c] = true;

            // Recurse into all 4 cardinal paths
            dfs(r + 1, c, reachableMatrix, heights[r][c]); // Down
            dfs(r - 1, c, reachableMatrix, heights[r][c]); // Up
            dfs(r, c + 1, reachableMatrix, heights[r][c]); // Right
            dfs(r, c - 1, reachableMatrix, heights[r][c]); // Left
        }

        // 2. Stream uphill from coastlines
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacificReachable, heights[0][c]);             // Top border (Pacific)
            dfs(ROWS - 1, c, atlanticReachable, heights[ROWS - 1][c]); // Bottom border (Atlantic)
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacificReachable, heights[r][0]);             // Left border (Pacific)
            dfs(r, COLS - 1, atlanticReachable, heights[r][COLS - 1]); // Right border (Atlantic)
        }

        // 3. Find the intersection points where both flags are recorded as true
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                    results.push([r, c]);
                }
            }
        }

        return results;
    }
}
