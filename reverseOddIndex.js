Assignment Requirements:   
 Split the input string into an array of words using split(" "). 
 Traverse through each word using a loop. 
 Identify the odd indices in the array (e.g., 1, 3, 5, etc.) with index % 2 !== 0. 
 Reverse the word at odd indices (use array manipulation). 
 Leave even-indexed words as they are. 
 Construct and print the final sentence.  
 
Hints to Solve:     
  Use split(" ") to split the string into an array of words. 
  Use split("").reverse().join("") to reverse a word. 
  Use a loop to traverse through the array and identify odd indices. 
  Use join(" ") to combine the array back into a single string.  */
/* 
let position = " i am the software tester"
let assign = position.split(" ")
for(let i=0;i<=assign.length;i++){
    if(i %2 !== 0){

        assign[i]=assign[i].split("").reverse().join("")
    }re
}

console.log(assign.join(" ")) */
function lengthOfLastWord(s) {
  let trimmed = s.trim();                 // Remove extra spaces at start & end
  let words = trimmed.split(" ");         // Split the string into words
  let lastWord = words[words.length - 1]; // Get the last word
  return lastWord.length;                 // Return the length of last word
}
console.log(lengthOfLastWord("hello world"));

/* function lengthOfLastWord(s) {
→ lengthOfLastWord nu oru function create pannrom.
→ s na input string (example: "hello world").

let trimmed = s.trim();
→ trim() use panni string-oda start & end-la irukura extra spaces-a remove pannrom.
→ example: " hello world " → "hello world"
→ result trimmed variable-la store aagum.

let words = trimmed.split(" ");
→ split(" ") na space base panni string-a array-aa maathrom.
→ "hello world" → ["hello", "world"]
→ indha array words-la store aagum.

let lastWord = words[words.length - 1];
→ words.length na array-la total words count.
→ length - 1 na last index.
→ andha index-la irukura word-a lastWord-la store pannrom.
→ example: "world".

return lastWord.length;
→ lastWord.length na last word-oda characters count.
→ "world" → 5
→ indha value function-la irundhu return aagum.

}

console.log(lengthOfLastWord("hello world"));
→ function-a call pannrom.
→ input: "hello world"
→ output: 5
→ terminal-la 5 print aagum.





let s = "hello world";

let trimmed = s.trim();                 // Remove extra spaces
let words = trimmed.split(" ");         // Split into words
let lastWord = words[words.length - 1]; // Get last word

console.log(lastWord.length); 