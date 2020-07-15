import { useLocation } from "./locationDataProvider.js"
import { locationAsHTML } from "./location.js"

export const locationList = () => {
  const contentElement = document.querySelector(".locations")
  const locations = useLocation()

  let locationHTMLRep = ""
  for (const location of locations) {
    locationHTMLRep += locationAsHTML(location)
  }

  contentElement.innerHTML += `
    ${locationHTMLRep}
  `
}