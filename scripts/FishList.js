// This module renders individual fish objects as HTML

import { useFish } from "./FishDataProvider.js"
import { fishAsHTML } from './fish'


export const FishList = () => {
  // the following code will grab a ref to the disired spot on the index.html by targeting a class
  const contentElement = document.querySelector(".fishes")
  const fishes = useFish()

  // generate all HTML for all fish
  let fishHTMLRepresentations = ""
  for (const fish of fishes) {
    fishHTMLRepresentations += fishAsHTML(fish)
  }

  contentElement.innerHTML += `
  ${fishHTMLRepresentations}
  `

}