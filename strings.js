/* JavaScript String Library : updated on 2021/03/18 */

const stringLib = () => {

    function concatenate(a, b) {
        // Append two strings together
        return a.concat(b);
    }

    function ASCIINumberToChar(Number) {
        //Same as GenerateCharactersTable() function, but this is for a single parameter
        // take one number, say, 127 and convert it to its ASCII char representation
        if (Number >= 32 || Number < 127) {
            return String.fromCharCode(Number)
        } else {
            console.error("Enter ASCII Number between 32 to 126");
        }
    }

    function CharToAsciiNumber(aChar) {
        //for a single parameter
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

    function GenerateCharactersTable() {
        //The list contains symbols, numbers, lowerCase, upperCase
        let charTableList = [];
        for (let i = 32; i < 127; i++) {
            charTableList.push(String.fromCharCode(i));
        }
        return charTableList;
    }

    function GenerateOnlyUpperCase() {
        //The list contains all upper case characters
        //Ie: A,B,C,D,E,F,G...Z
        let upperCaseList = [];
        for (let i = 65; i < 91; i++) {
            upperCaseList.push(String.fromCharCode(i));
        }
        return upperCaseList;
    }

    function GenerateOnlyLowerCase() {
        //The list contains all lower case characters
        //Ie: a,b,c,d,e,f,g...z
        let lowerCaseList = [];
        for (let i = 97; i < 123; i++) {
            lowerCaseList.push(String.fromCharCode(i));
        }
        return lowerCaseList;
    }

    function GenerateOnlyUpperCaseSingleParam(stringParam) {
        //for a single parameter. returns only one upper case letter
        //Ie: A,B,C,D,E,F,G...Z
        return stringParam.toUpperCase();
    }

    function GenerateOnlyLowerCaseSingleParam(stringParam) {
        //for a single parameter. returns only one lower case letter
        //Ie: a,b,c,d,e,f,g...z
        return stringParam.toLowerCase();
    }

    function GenerateOnlyNumbers() {
        //The list contains all numbers
        //Ie: 0,1,2,3...9
        let numberList = []
        for (let i = 48; i < 58; i++) {
            numberList.push(String.fromCharCode(i));
        }
        return numberList;
    }

    function GenerateOnlySymbols() {
        //The list contains all symbols
        //Ie: $, %, !, #, etc
        let symbolList = [];
        for (let i = 58; i < 64; i++) {
            symbolList.push(String.fromCharCode(i));
        }
        for (let i = 91; i < 96; i++) { //the middle
            symbolList.push(String.fromCharCode(i));
        }
        for (let i = 123; i < 127; i++) { //the latter
            symbolList.push(String.fromCharCode(i));
        }
        return symbolList;
    }

    function GenerateUpperAndLowerCase() {
        //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
        return GenerateOnlyLowerCase, GenerateOnlyUpperCase;
    }

}
