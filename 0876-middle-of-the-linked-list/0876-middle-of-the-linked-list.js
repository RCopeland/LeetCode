/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0;
  let pointer = head;

  while(pointer != null) {
    length++;
    pointer = pointer.next;
  }

  let stop = null;
  if(length % 2 === 0) {
    stop = length / 2 + 1;    
  } else {
    stop = Math.ceil(length / 2); 
  }
  
  let count = 0;
  while(count < stop - 1){
    head = head.next;
    count++; 
  }

  return head;

};