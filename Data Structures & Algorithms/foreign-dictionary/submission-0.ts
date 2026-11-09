class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        // 1. Initialize Adjacency List for all unique letters present in the dictionary
        const adj = new Map<string, Set<string>>();
        for (const word of words) {
            for (const char of word) {
                if (!adj.has(char)) {
                    adj.set(char, new Set<string>());
                }
            }
        }

        // 2. Build the dependency graph by comparing adjacent word pairs
        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);

            // Edge Case: If w2 is a prefix of w1 but w1 is longer, it's an invalid ordering
            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }

            // Find the first differing character to establish an edge link
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    adj.get(w1[j])!.add(w2[j]);
                    break; // Only the first differing character gives order information
                }
            }
        }

        // 3. Setup Three-State DFS Trackers:
        // state map handles: undefined = unvisited, true = visiting (active stack), false = visited (safe)
        const state = new Map<string, boolean>();
        const result: string[] = [];

        function hasCycle(char: string): boolean {
            if (state.get(char) === true) return true; // Hit a character on the active stack -> Cycle!
            if (state.get(char) === false) return false; // Already fully processed, skip reprocessing

            // Mark as 'visiting' (push to active recursion stack)
            state.set(char, true);

            for (const neighbor of adj.get(char)!) {
                if (hasCycle(neighbor)) {
                    return true;
                }
            }

            // Mark as 'visited' (safe component) and add to chronological topological path
            state.set(char, false);
            result.push(char);
            return false;
        }

        // 4. Run DFS across every unique character in the language alphabet map
        for (const char of adj.keys()) {
            if (hasCycle(char)) {
                return ""; // Cycle detected, layout ordering is impossible
            }
        }

        // Post-order tracks leaf to root, so reverse it to get correct forward order
        return result.reverse().join("");
    }
}
