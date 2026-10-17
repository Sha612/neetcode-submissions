// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        let curr: Node | null = head;

        // Phase 1: Interleave cloned nodes right next to their originals
        // Transforming: A -> B -> C into A -> A' -> B -> B' -> C -> C'
        while (curr !== null) {
            const nextNode = curr.next;
            const cloneNode = new Node(curr.val);

            curr.next = cloneNode;
            cloneNode.next = nextNode;

            curr = nextNode; // Teleport to the next original node
        }

        curr = head;
        // Phase 2: Wire up the random pointers for the cloned nodes
        while (curr !== null) {
            if (curr.random !== null) {
                // The clone's random pointer points to the original's random target's clone
                curr.next!.random = curr.random.next;
            }
            // Advance by 2 steps to jump past the clone to the next original node
            curr = curr.next!.next;
        }

        curr = head;
        const dummyHead = new Node(0);
        let copyCurr: Node | null = dummyHead;

        // Phase 3: Unweave the lists to restore the original and isolate the copy
        while (curr !== null) {
            const nextOriginal = curr.next!.next;

            // Extract the clone node
            const cloneNode = curr.next!;
            copyCurr.next = cloneNode;
            copyCurr = cloneNode;

            // Restore original node's link
            curr.next = nextOriginal;

            curr = nextOriginal;
        }

        return dummyHead.next;
    }
}
