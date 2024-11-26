class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    // Border case: length 1 or empty
    if (!head || !head.next) {
        return head;
    }

    // initialize with a dummy node
    const dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        const first = head;
        const second = head.next;
        prev.next = second;
        first.next = second.next;
        second.next = first;
        prev = first;
        head = first.next; // 1st node of the next pair
    }

    return dummy.next;
};