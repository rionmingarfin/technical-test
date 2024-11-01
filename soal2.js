function countChars(str) {
    let result = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result.push(`${str[i]} = ${count}`);
            count = 1;
        }
    }
    return result.join(', ');
}
const input = 'aaabbcccaaaac';
const output = countChars(input);
console.log(output);
