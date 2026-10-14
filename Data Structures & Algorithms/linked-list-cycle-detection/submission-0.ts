/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        // 1. Edge Case: An empty list or a list with only 1 node can never have a cycle
    if (head === null || head.next === null) {
        return false;
    }

    // 2. Initialize both pointers to start at the beginning of the track
    let tortoise: ListNode | null = head;
    let hare: ListNode | null = head;

    // 3. Run the race as long as the fast Hare has valid tracks ahead of them
    while (hare !== null && hare.next !== null) {
        tortoise = tortoise!.next;       // Moves 1 step forward
        hare = hare.next.next;           // Moves 2 steps forward (twice as fast!)

        // 4. The Lap Check: If they crash into the exact same node object reference,
        // a loop exists! Return true immediately.
        if (tortoise === hare) {
            return true;
        }
    }

    // The Hare hit a dead-end null wall, meaning the track is a straight line
    return false;
    }
}
