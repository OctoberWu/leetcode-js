/**
 * * longest without repeating characters substring
 * 1. two competitors, one for history, one for current(i, j)
 * 2. compare for each run. 
 * 3. once the longer one appears, have to update the record, and reset the current anchor.
 */

function lengthOfLongestSubstring(s) {
	// [pre-requisite] if only one single character, return.
	if (s.length < 2) return s.length;

	// [major part] 
	const hash = {}; // for the record
	let max = 0;     // benchmark

	for (let i = 0, j = -1, len = s.length; i < len; i++) {
		const cur = s[i];
		// once found the repeating character, should reset the anchor, check record for max.
		if (hash[cur] != null) j = Math.max(j, hash[cur]);

		hash[cur] = i
		max = Math.max(max, i - j)
	}
	return max;
}

console.log(lengthOfLongestSubstring('helloadfasd'));