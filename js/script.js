/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/***
  This is an array of objects that holds the quote, source, citation, year and quote_type.
***/

let quotes = [
  {
    quote:"The purpose of our lives is to be happy.",
    source: "Dalai Lama",
    citation: "Parade Magazine",
    year: "unknown",
    quote_type: "| Inspirational"
  },
  {
    quote:"Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas A. Edison",
    citation: "Parade Magazine",
    year: "unknown",
    quote_type: "| Inspirational"
  },
  {
    quote:"Where flowers bloom, so does hope.",
    source: "Lady Bird Johnson",
    citation: "Book | What Color Is Your Parachute?",
    year: "unknown",
    quote_type: "| Educational"
  },
  {
    quote:"I am not lucky. You know what I am ? I am smart, I am talented, I take advantage of the opportunities that come my way, and I work really, really hard. Don't call me lucky. Call me a badass.",
    source: "Shanda Rhimes",
    citation: 'Book-"What Color Is Your Parachute?"',
    year: "unknown",
    quote_type: "| Educational"
  },
  {
    quote:"I heard you were focusing a little more on yourself and worrying a little less about everyone else, and I think that's beautiful.",
    source: "Simple Reminders",
    citation: "Instagram",
    year: "2021",
    quote_type: "| Inspirational"
  },
  {
    quote:"Every moment is a fresh beginning.",
    source: "T.S Eliot",
    citation: "Parade",
    year: "unknown",
    quote_type: "| Life Quotes"
  },
  {
    quote:"A woman is like a tea bag: You can't tell how strong she is until you put her in hot water.",
    source: "Clairee Belcher, Steel Magnolias",
    citation: "womansday.com",
    year: "unknown",
    quote_type: "| Life Quotes"
  },
  {
    quote:"The secret of staying young is to live honestly, eat slowly, and lie about your age.",
    source: "Lucille Ball",
    citation: "womansday.com",
    year: "unknown",
    quote_type: "| Funny Quotes"
  },
  {
    quote:"Imagine thinking you're not good enough but the whole time, you're really too good.",
    source: "Timbaland",
    citation: "Twitter",
    year: "2021",
    quote_type: "| Inspirational"
  },
  {
    quote:"I can't lie, after December a lot of things are gonna change.",
    source: "Jada.P",
    citation: "Twitter",
    year: "2021",
    quote_type: "| Inspirational"
  }

];

// console.log(quotes);

// getRandomQuote function that creates random number between 1 and the length of the quotes as an index of array and return a random quote
function getRandomQuote() {
  let randomNum = Math.floor(Math.random()*quotes.length);
  let randomQuote=quotes[randomNum];
  return randomQuote;
}
// console.log(getRandomQuote());

// printQuote function 
function printQuote () {
  let randomQuote = getRandomQuote(quotes);
  let quoteBox = document.getElementById("quote-box");
  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source">${randomQuote.source}
               <span class="citation"> ${randomQuote.citation} </span>
               <span class="quote_type"> ${randomQuote.quote_type} </span>
             ` ;

  if(randomQuote.year !="unknown"){
    html += `<span class="year"> ${randomQuote.year} </span>`;
  } 
  html += '</p>';   
  quoteBox.innerHTML = html;  
  return document.body.style.backgroundColor=getBackgroundColor();
//  console.log(html);
}

// Create random background color for each quote
function getBackgroundColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  console.log("hello");

  let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  return (rgbColor);
 
}

//quote will change every 8 seconds
let timer = setInterval(printQuote, 8000);

// when each time the "show another quote" button is clicked, it calls the printQuote function to run.

document.getElementById('load-quote').addEventListener("click", printQuote, false);