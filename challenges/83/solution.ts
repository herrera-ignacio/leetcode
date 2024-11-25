/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head?.next;
    let prev = head;

    while (current) {
        if (current.val === prev.val) {
            prev.next = current.next;
        } else {
            prev = current;
        }
        current = current.next;
    }

    return head;
};