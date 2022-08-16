/**
 * 1. intial and end object
 * 2. about incremental issue
 * 3. iterate to the next
 */
function ListNode(_val, _next) {
	this.val = (_val === undefined) ? 0 : _val;
	this.next = (_next === undefined) ? null : _next;
}
// console.log(new ListNode(null));

let l1 = new ListNode(8, new ListNode(2, new ListNode(7)));
let l2 = new ListNode(8, new ListNode(8, new ListNode(8)));


const addTwoNumbers = function (l1, l2) {
	let res = new ListNode(null);
	let inc = false;
	let cur = res;
	while (l1 || l2 || inc) {
		const tmp = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (inc ? 1 : 0);
		inc = (tmp >= 10) ? true : false;
		cur.next = new ListNode(tmp % 10)
		cur = cur.next;
		// --- protection ---
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;

	}

	return res.next;
};

console.log(JSON.stringify(addTwoNumbers(l1, l2)));