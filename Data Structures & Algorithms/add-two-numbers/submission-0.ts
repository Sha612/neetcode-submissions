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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        const dummyHead = new ListNode(0);
    let curr = dummyHead;
    
    let carry = 0;

    // 2. Continue looping as long as there are digits to add OR a leftover carry
    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry; // Start the column calculation with our carried over remainder

        // Extract value from l1 if it exists, then advance its pointer
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        // Extract value from l2 if it exists, then advance its pointer
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // 3. Compute the new carry and the base single digit value
        carry = Math.floor(sum / 10);
        const digitValue = sum % 10;

        // 4. Generate the new result node and step forward
        curr.next = new ListNode(digitValue);
        curr = curr.next;
    }

    // Return the true head of our newly minted summation list
    return dummyHead.next;
    }
}
