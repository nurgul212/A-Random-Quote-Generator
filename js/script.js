/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/***
  This is an array of objects that holds the quote, source, citation, year and tag.
***/

let quotes = [
  {
    quote:"The purpose of our lives is to be happy.",
    source: "Dalai Lama",
    citation: "Parade Magazine",
    tags: "Inspirational"
  },
  {
    quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison",
    citation: "Parade Magazine",
    tags: "Inspirational"
  },
  {
    quote:"Where flowers bloom, so does hope.",
    source: "Lady Bird Johnson",
    citation: "Book",
    tags: "Educational"
  },
  {
    quote:"I am not lucky. You know what I am ? I am smart, I am talented, I take advantage of the opportunities that come my way, and I work really, really hard. Don't call me lucky. Call me a badass.",
    source: "Shanda Rhimes",
    citation: "Book",
    tags: "Educational"
  },
  {
    quote:"I heard you were focusing a little more on yourself and worrying a little less about everyone else, and I think that's beautiful.",
    source: "Unknown",
    citation: "Instagram",
    year: "2021"
  },
  {
    quote:"Every moment is a fresh beginning.",
    source: "T.S Eliot",
    citation: "Parade",
    tags: "Life Quotes"
  }

]

// console.log(quotes);

// getRandomQuote function that creates random number between 1 and the length of the quotes as an index of array and return a random quote
function getRandomQuote() {
  let randomIndex = Math.floor(Math.random()*quotes.length);
  let randomQuote=quotes[randomIndex];
  return randomQuote;

}
// console.log(getRandomQuote());


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);