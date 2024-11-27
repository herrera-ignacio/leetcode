/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || left === right) return head;

  let curr = head;
  let prev = null;
  let idx = 0;

  while (curr && idx < left - 1) {
    prev = curr;
    curr = curr.next;
    idx++;
  }

  const newHead = prev;
  const newTail = curr;

  while (curr && idx < right) {
    const third = curr.next;
    curr.next = prev;
    prev = curr;
    curr = third;
    idx++;
  }

  if (newHead) {
    newHead.next = prev;
  } else {
    head = prev;
  }
  newTail.next = curr;

  return head;
};