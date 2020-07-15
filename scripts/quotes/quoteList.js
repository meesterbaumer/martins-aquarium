import { useQuote } from "./quoteDataProvider.js"
import { quoteAsHTML } from "./quote.js"

export const quoteList = () => {
// this code grabs a section of my HTML to later place the quotes
const contentElement = document.querySelector(".quotes")
const quotes = useQuote()

// Now to generate the HTML for all the quotes
let quoteHTMLRep = ""
for (const quote of quotes) {
  quoteHTMLRep += quoteAsHTML(quote)
}

contentElement.innerHTML +=`
${quoteHTMLRep}
`

}