type MyNode = {
    word: string | null;
    children: MyNode[];
};

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        const results: string[] = [];
        const ROWS = board.length;
        const COLS = board[0].length;

        // --- Step 1: Initialize High-Performance Sparse Array Trie ---
        const root: MyNode = { word: null, children: [] };
        
        function idxOf(char: string): number {
            return char.charCodeAt(0) - 97; // 'a' corresponds to 0
        }

        for (const word of words) {
            let curr = root;
            for (let i = 0; i < word.length; i++) {
                const idx = idxOf(word[i]);
                if (!curr.children[idx]) {
                    curr.children[idx] = { word: null, children: [] };
                }
                curr = curr.children[idx];
            }
            curr.word = word; // Store the full string at the terminal node
        }

        // --- Step 2: Backtracking DFS Core Engine ---
        function dfs(r: number, c: number, node: MyNode): void {
            // Out of bounds or visiting an already processed cell
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] === "#") {
                return;
            }

            const char = board[r][c];
            const idx = idxOf(char);
            const childNode = node.children[idx];

            // Prune search branch early if prefix path doesn't exist in Trie
            if (!childNode) return;

            // If a word is matched, harvest it and clear node link to avoid duplicate results
            if (childNode.word !== null) {
                results.push(childNode.word);
                childNode.word = null;
            }

            // In-place masking of the active grid cell
            board[r][c] = "#";

            // Traverse all 4 cardinal paths sequentially
            dfs(r + 1, c, childNode); // Down
            dfs(r - 1, c, childNode); // Up
            dfs(r, c + 1, childNode); // Right
            dfs(r, c - 1, childNode); // Left

            // Backtrack: Restore cell value
            board[r][c] = char;
        }

        // --- Step 3: Run Grid Exploration Matrix Scan ---
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, root);
            }
        }

        return results;
    }
}
