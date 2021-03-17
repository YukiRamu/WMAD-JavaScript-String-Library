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
        if (Number >= 32 || Number <= 127) {
            return String.fromCharCode(Number)
        } else {
            console.error("Enter ASCII Number between 32 to 127");
        }
    }

    function CharToAsciiNumber(aChar) {
        // take one Character, say, 'A' and convert it to it's ASCILL Number representation
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
        return GenerateOnlySymbols(48, 57);
    }

    function GenerateOnlySymbols(start, end) {
        //Ie: $, %, !, #, etc
        let symbolList = [];
        for (let i = start; start < end; i++) {
            symbolList.push(String.fromCharCode(i))
        }
        return symbolList;
    }

    function GenerateUpperAndLowerCase() {
        //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        return GenerateOnlySymbols(65, 90), GenerateOnlySymbols(97, 122);
    }
}
