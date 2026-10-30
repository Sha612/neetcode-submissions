class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const ROWS = board.length;
        const COLS = board[0].length;

        function dfs(r: number, c: number, index: number): boolean {
            // Base Case 1: Successfully matched all characters in the word
            if (index === word.length) {
                return true;
            }

            // Base Case 2: Out of grid bounds or character mismatch (including marked '#' cells)
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[index]) {
                return false;
            }

            // --- Step 1: Mark the cell as visited ---
            const originalChar = board[r][c];
            board[r][c] = "#";

            // --- Step 2: Explore all 4 orthogonal directions ---
            const wordFound =
                dfs(r + 1, c, index + 1) || // Down
                dfs(r - 1, c, index + 1) || // Up
                dfs(r, c + 1, index + 1) || // Right
                dfs(r, c - 1, index + 1); // Left

            // --- Step 3: Backtrack ---
            // Restore the cell back to its original letter for other path branches
            board[r][c] = originalChar;

            return wordFound;
        }

        // Scan every cell in the grid to find a potential starting anchor point
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
