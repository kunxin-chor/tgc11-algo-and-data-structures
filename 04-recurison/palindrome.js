
function checkIsPalindrome(str, start, end) {

    if (start == end || start > end) {
        return true;
    }
    console.log(str[start], 'vs', str[end]);
    return (str[start] == str[end] 
        && checkIsPalindrome(str, start+1, end-1))
}

function checkIsPalindromeV2(str) {
    console.log("Checking", str);
    if (str.length == 0 || str.length == 1) {
        return true;
    }
    return (str[0] == str[str.length-1] &&
            checkIsPalindromeV2(str.slice(1, str.length-1)))
}
let str = "tattarrattat";
console.log(checkIsPalindrome(str, 0, str.length-1));
console.log(checkIsPalindromeV2(str));

