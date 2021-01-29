/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/*
* Array contains 7 quote objects with a quote and a source
* Some objects have additional elements (citiation, year, & link to a Goodreads page for quoted book)
*/
const quotes = [
  {
    quote: 'The truth is rarely pure and never simple.',
    source: 'Oscar Wilde',
    citation: 'The Importance of Being Earnest',
    year: 1895,
    link: 'https://www.goodreads.com/book/show/92303.The_Importance_of_Being_Earnest'
  },
  {
    quote: 'The truth is out there, but so are lies.',
    source: 'Dana Scully',
    citation: 'The X-Files',
    year: 1994
  },
  {
    quote: 'Better weird than dead.',
    source: 'Marshall Teller',
    citation: 'Eerie Indiana',
  },
  {
    quote: 'As the image of myself becomes sharper in my brain and more precious, I feel less afraid someone else will erase me by denying me love.',
    source: 'Jenny Slate',
    citation: 'Little Weirds',
    year: 2019,
    link: 'https://www.goodreads.com/book/show/44284906-little-weirds'
  },
  {
    quote: 'Like any artist without an art form, she became dangerous.',
    source: 'Toni Morrison',
    citation: 'Sula',
    year: 1973,
    link: 'https://www.goodreads.com/book/show/11346.Sula'
  },
  {
    quote: 'Cut. It. Out.',
    source: 'Uncle Joey',
    citation: 'Full House',
  },
  {
    quote: 'My log does not judge.',
    source: 'Log Lady',
    citation: 'Twin Peaks'
  }
];

/***
 * `getRandomQuote` function
***/

// Gets a random number from 0 to the length of the given array to return a random object from the array. 
function getRandomQuote(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

/*
* randomColorValue variable holds a random value for an RGB color, to be applied to the page background.
* getRandomColor function creates the RGB color value and returns that random color.
* Adpated from https://teamtreehouse.com/library/the-refactor-challenge-one-solution.
*/
const randomColorValue = () => Math.floor(Math.random() * 256);

function getRandomColor(value) {
    const randomColor = `rgb( ${value()}, ${value()}, ${value()} )`;
    return randomColor;
  }

/***
 * `printQuote` function
***/

/*
* printQuote function:
* prints a random object from the quotes array using the getRandomQuote function.
* sets the value of the html for the quote and the source,
as well as the citation, year, and link if applicable.
* sets the background color to change to a random RGB color when 
the quote changes using the getRandomColor function.
*/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if ( randomQuote.hasOwnProperty('citation') ) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.hasOwnProperty('year') ) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if ( randomQuote.hasOwnProperty('link') ) {
    html += ` (<a target="_blank" rel="noopener noreferrer" href="${randomQuote.link}">Goodreads</a>)`;
  }
  html += `</p>`;
  document.body.style.background = getRandomColor(randomColorValue); // Adapted from https://stackoverflow.com/questions/31089414/javascript-change-background-color-on-click
  document.getElementById('quote-box').innerHTML = html;
}

// setInterval method runs printQuote function every 6000 ms/6 s.
setInterval(printQuote, 6000);

//console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);