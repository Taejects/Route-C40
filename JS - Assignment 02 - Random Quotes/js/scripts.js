/* Listing Quotes
-----------------------------------------------------------*/
var quotesList = [
    {
        quoteText: "Be yourself; everyone else is already taken.",
        quoteAuthor: "Oscar Wilde",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1673611182p2/3565.jpg"
    },
    {
        quoteText: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        quoteAuthor: "Albert Einstein",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1429114964p2/9810.jpg"
    },
    {
        quoteText: "So many books, so little time.",
        quoteAuthor: "Frank Zappa",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1315160559p2/22302.jpg"
    },
    {
        quoteText: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        quoteAuthor: "Bernard M. Baruch",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1331977133p2/5768330.jpg"
    },
    {
        quoteText: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.`,
        quoteAuthor: "William W. Purkey",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1282396130p2/1744830.jpg"
    },
    {
        quoteText: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        quoteAuthor: "Dr. Seuss",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1193930952p2/61105.jpg"
    },
    {
        quoteText: "You only live once, but if you do it right, once is enough.",
        quoteAuthor: "Mae West",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1198551937p2/259666.jpg"
    },
    {
        quoteText: "Be the change that you wish to see in the world.",
        quoteAuthor: "Mahatma Gandhi",
        quoteAuthorImg: "https://images.gr-assets.com/authors/1356810912p2/5810891.jpg"
    }
]

/* Variables Declaration
-----------------------------------------------------------*/
var quoteItem, quoteBlock, quoteText, quoteAuthor, quoteAuthorImg;
var quoteWrapper = document.getElementById("quote-wrapper");

/* Randomize Quotes Array
-----------------------------------------------------------*/
function randomQuote() {
    value = Math.random() * quotesList.length;
    quoteItem = quotesList[~~value];
}

/* Print Quote to HTML
-----------------------------------------------------------*/
function quotePrint() {
    //Calling randomizing function
    randomQuote()

    //Assigning values to our variables
    quoteText = quoteItem.quoteText;
    quoteAuthor = quoteItem.quoteAuthor;
    quoteAuthorImg = quoteItem.quoteAuthorImg;
    
    //Building HTML structure
    quoteBlock = `
            <div class= "d-flex justify-content-center mb-4">
            <img id="quote-img" src="${quoteAuthorImg}"
            class="rounded-circle shadow-1-strong" width="100" height="100" style="object-fit: cover">
        </div>
        <h5 id="quote-author" class="mb-3 text-muted">${quoteAuthor}</h5>
        <p id="quote-text" class="px-xl-3 fs-4 text-info" style="min-height: 150px">
            <i class="fas fa-quote-left pe-3 fs-3 text-muted" style="transform: translateY(-5px)"></i>${quoteText}
        </p>
`;
    //Assigning quote element to our HTML
    quoteWrapper.innerHTML = quoteBlock;
}

/* Add new Quote to Array
-----------------------------------------------------------*/
function addQuote() {
    var newQuote = {
        quoteText: document.getElementById("quoteText").value,
        quoteAuthor: document.getElementById("quoteAuthor").value,
        quoteAuthorImg: document.getElementById("quoteAuthorimg").value
    }
    quotesList.push(newQuote);
    //clear form after submit
    clearForm()
}

/* Clear form
-----------------------------------------------------------*/
function clearForm() {
    document.getElementById("quoteText").value = "",
        document.getElementById("quoteAuthor").value = "",
        document.getElementById("quoteAuthorimg").value = ""
}