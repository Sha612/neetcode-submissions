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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy:ListNode = new ListNode(-1);
        let tail:ListNode = dummy;
        while (list1 !== null && list2 !== null){
            if (list1.val <=list2.val){
                tail.next=list1;
                list1= list1.next;
            }else{
                tail.next = list2;
                list2=list2.next;
            }
            tail= tail.next;
        }
        if (list1 !== null) {
        tail.next = list1;
    } else if (list2 !== null) {
        tail.next = list2;
    }

    return dummy.next;
    }
}
