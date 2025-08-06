/* This javascript document has a function that analyses an array and returns an object with this information: 

    - How many words the array has
    - How many that start with a vowel
    - How many have more than 5 letters
    - Which word is longer
    - Alphabetically ordered words

    The function will be called "analizarPalabras".
*/

const array = ["hola","avellana","tomate","rio","ornamento","Himalaya"];

function analizarPalabras() {

    const numOfWords = array.length;
    const vowelRegex = /^[aeiouAEIOU]/;

    const matches = array.filter(word => vowelRegex.test(word)).length;

    const moreThanFive = array.filter((word) => word.length > 5).length;


    // Version 1
    //const longestWord = array.find( word => word.length === Math.max(...(array.map(word => word.length))) );

    // Version 2, simplified
    const longestWord = array.reduce((longest, current) => {
        // console.log("Comparando:", longest, "vs", current); (Console log to see what the reduce is doing)
        return current.length > longest.length ? current : longest;
    });


    // Version 1
    // const alphabeticallyOrdered = array.sort(function (a, b) {
    //     return a.localeCompare(b);;
    // });

    // Version 2, simplified
    const alphabeticallyOrdered = [...array].sort((a, b) => a.localeCompare(b));

    const result = {
        
        "1. Number of words": numOfWords,
        "2. Words that start with vowel": matches,
        "3. Words with more than five letters": moreThanFive,
        "4. The longest word": longestWord,
        "5. Alphabetically ordered array": alphabeticallyOrdered
            
    }
    
    console.log(result)
}

analizarPalabras()