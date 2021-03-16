/* JavaScript String Library */

const stringLib = () => {

    function StrformatCheck() {
        // to be added and called in each function
    }

    function concatenate(a, b) {
        // Append two strings together
        return a.concat(b);
    }

    function ASCIINumberToChar(Number) {
        // take one number, say, 127 and convert it to its ASCII char representation
        return String.fromCharCode(Number);
    }

    function CharToAsciiNumber(aChar) {
        // take one Character, say, 'A' and convert it to it's Number representation
        return aChar.charCodeAt(0); //first letter specified
    }

    function ReverseString(origionalString) {
        // return a string, ie: Hello becomes olleH
        let reverseStrArray = [];
        let reverseStr = "";

        for (i = origionalString.length - 1; i >= 0; i--) {
            reverseStrArray.push(origionalString.charAt(i)) //push a letter one by one from the last to an array
            reverseStr = reverseStrArray.join(""); //convert an array to a string
        }
        return reverseStr;
    }

    function GenerateOnlyUpperCase(stringParam) {
        //Ie: A,B,C,D,E,F,G...Z
        return stringParam.toUpperCase();
    }

    function GenerateOnlyLowerCase(stringParam) {
        //Ie: a,b,c,d,e,f,g...z
        return stringParam.toLowerCase();
    }

    function GenerateOnlyNumbers() {
        // Make a loop, and show only numbers, 0 to 9 and return that in a list
        //Ie: 0,1,2,3...9
        //To be updated
    }

    function GenerateOnlySymbols() {
        //Ie: $, %, !, #, etc
        //To be updated
    }


    function GenerateUpperAndLowerCase() {
        //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        //To be updated
    }

}
