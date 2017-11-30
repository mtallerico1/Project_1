// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// declaring an array of objects to contain quotes and pertinent information
var quotes = [
    { quote: "For there is nothing lost, that may be found, if sought." , source:"Edmund Spenser", citation:"The Faerie Queen" },
    { quote: "Don't cry because it's over, smile because it happened" , source: "Dr. Suess" },
    { quote: "So many books, so little time." , source: "Frank Zappa" },
    { quote: "If you tell the truth, you don't have to remember anything.", source: "Mark Twain" },
    { quote: "Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.", source: "Augustine of Hippp", citation: "Confessions" },
    { quote: "Love your neighbor as yourself.", source: "Jesus", citation: "The Book of Matthew" },
    { quote: "Failures, repeated failues, are finger post on the road to achievement. One fails forward toward success.", source: "C.S. Lewis" },
    { quote: "It is never too late to be what you might have been.", source: "George Elliot" },
    { quote: "There is no greater agony than bearing an untold story inside you.", source: "Maya Angelou", citation: "I Know Why the Caged Bird Sings", year: 1970 },
    { quote: "Do what you can, with what you have, where you are.", source: "Theodore Roosevelt" }
];

var color = [ '#020202', '#0D2818', '#04471C', '#058C42', '#16DB65' ];

//declaring global variables
var randomQuoteObj;
var randomQuote;
var randomColor;
var output;

//this function generates a random integer from 0 to the array length and then returns the random quote object
function getRandomNumber () {
    randomNumber = Math.floor( Math.random() * quotes.length);
    return quotes[randomNumber]; 
}

function randomColor () {
    randomColor = Math.floor( Math.random() * color.length);
    return color[randomColor];
}




//this function prints the random quote to the dive on the page
function printQuote () {
    randomQuote = getRandomNumber();
    output = '<p class="quote">' + randomQuote.quote + '</p>';
    // this if else statement looks to see weather the quote has citation and year in the object and then adds the neccesary html 
    if (randomQuote.citation && randomQuote.year) {
        output += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>' + '<span class="year">' + randomQuote.year + '</span>' + '</p>';
    } else if (randomQuote.citation) {
        output += '<p class="source">' + randomQuote.source + '<span class="citation">' + randomQuote.citation + '</span>' + '</p>';
    } else {
        output += '<p class="source">' + randomQuote.source + '</p>';
    }
    // this targets the correct div in the DOM and prints the string in output
    var htmlDiv = document.getElementById('quote-box'); 
    htmlDiv.innerHTML= output;
    document.getElementById(body).style.backgroundColor = randomColor();
}

