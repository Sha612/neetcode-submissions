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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null || head.next.next === null) {
            return;
        }
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        while (fast !== null && fast.next !== null) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        let curr: ListNode | null = slow!.next;
        slow!.next = null; // Sever the link to isolate the first half cleanly

        let prev: ListNode | null = null;
        let nextTemp: ListNode | null = null;

        while (curr !== null) {
            nextTemp = curr.next; // Recycle allocation
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        // 4. Stage 3: The Zipper Merge
        // We recycle 'slow' and 'fast' as our crawling heads to save memory registers!
        slow = head; // slow now crawls the first half track
        fast = prev; // fast now crawls the reversed second half track

        let firstNext: ListNode | null = null;
        let secondNext: ListNode | null = null;

        while (fast !== null) {
            // Cache next nodes using pre-allocated memory registers
            firstNext = slow!.next;
            secondNext = fast.next;

            // Splice the nodes together
            slow!.next = fast;
            fast.next = firstNext;

            // Advance both crawling heads safely
            slow = firstNext;
            fast = secondNext;
        }
    }
}
