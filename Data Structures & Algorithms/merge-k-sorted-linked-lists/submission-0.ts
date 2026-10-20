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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Base cases: if the input array is empty or null, return null
        if (!lists || lists.length === 0) return null;

        // Iteratively merge adjacent pairs of lists until only one unified list remains
        while (lists.length > 1) {
            const mergedLists = [];

            // Step through the array by 2s to group lists into pairs
            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                // If there's an odd number of lists, the last list won't have a partner
                const l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

                // Merge this pair and store the unified result
                mergedLists.push(this.mergeTwoLists(l1, l2));
            }

            // Replace the old collection layer with our newly paired up lists
            lists = mergedLists;
        }

        // Return the final completely merged list sitting at index 0
        return lists[0];
    }

    /**
     * Core Helper: Classical two-pointer merge for two sorted lists
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    mergeTwoLists(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;

        // Traverse both lists and append the smaller value to our result chain
        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        // Fast-forward append any remaining nodes leftover at the end of either list
        curr.next = (l1 !== null) ? l1 : l2;

        return dummy.next;
    }
}
