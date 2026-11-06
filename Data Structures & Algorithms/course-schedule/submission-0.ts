class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        // 1. Build Adjacency List representing the directed graph
        const adj: number[][] = Array.from({ length: numCourses }, () => []);
        for (const [course, prereq] of prerequisites) {
            adj[course].push(prereq);
        }

        // 2. Track visitation states: 0 = unvisited, 1 = visiting, 2 = visited
        const state = new Uint8Array(numCourses);

        // Core DFS function to detect cycles
        function hasCycle(course: number): boolean {
            // If it is currently on the active stack, a cycle is found
            if (state[course] === 1) return true;
            // If it is already fully processed and verified, skip it
            if (state[course] === 2) return false;

            // Mark as 'visiting' (push to active recursion branch)
            state[course] = 1;

            // Explore all prerequisite dependencies
            for (const prereq of adj[course]) {
                if (hasCycle(prereq)) {
                    return true;
                }
            }

            // Mark as 'visited' (pop from stack, verified safe)
            state[course] = 2;
            return false;
        }

        // 3. Scan every course since the graph might be disconnected
        for (let i = 0; i < numCourses; i++) {
            if (hasCycle(i)) {
                return false; // Cycle detected, impossible to finish
            }
        }

        return true;
    }
}
