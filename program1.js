
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // If it's a closing bracket
        if (char in map) {
            // Pop the top of the stack or use a dummy value if stack is empty
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the popped element doesn't match the expected opening bracket
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, the parentheses are balanced
    return stack.length === 0;
}; 

module.exports = { isValid };


