module.exports = function check(str, bracketsConfig) {
    let brackets = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    let stack = [];
    for (let x = 0; x < str.length; x++) {
        if (stack.length !== 0 && brackets[stack[stack.length - 1]] === str[x]) {
            stack.pop()
        } else if (str[x] in brackets) {
            stack.push(str[x])
        } else if (stack.length === 0 || brackets[stack[stack.length - 1]] !== str[x]) {
            return false
        }
    }
    return stack.length === 0;
}
