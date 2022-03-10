const quotes = [
  "\“The first thing we do, let's kill all the lawyers.\”\n ― William Shakespeare, King Henry VI, Part 2",
  "\“Everything the State says is a lie, and everything it has it has stolen.\” \n― Friedrich Nietzsche",
  "\“What is important is to spread confusion, not eliminate it.\”\n ― Salvador Dalí",
  "\“A prison becomes a home when you have the key.\”\n ― George Sterling",
  "\"Capitalism without bankruptcy is like Christianity without hell.\"\n - Frank Borman"
];

let printQuotes = (A) => {
  let index = Math.floor(Math.random() * A.length);
  console.log(A[index]);
}

printQuotes(quotes);
printQuotes(quotes);
printQuotes(quotes);
