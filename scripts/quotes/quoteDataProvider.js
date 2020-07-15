const quoteCollection = [
  {
    quote: "No good fish goes anywhere without porpoise",
    author: "Lewis Carroll"
  },
  {
    quote: "A fish tank is just interactive television for cats",
    author: "Oliver Gaspirtz"
  },
  {
    quote: "99.99% of all castles in America are located in fish tanks",
    author: "Demetrie Martinl"
  },
  {
    quote: "Wherever the fish are, that's where we go",
    author: "Richard Wagner"
  }
]

export const useQuote = () => {
  // this allows you to return a copy of the collection to be used later.
  return quoteCollection.slice()
}