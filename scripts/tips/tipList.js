import { useTip } from './tipData.js'
import { tipAsHTML } from './tip.js'

export const tipList = () => {
  const contentElement = document.querySelector(".tipsAutomate")
  const tips = useTip()

  let tipHTMLRep = ""
  for (const tip of tips) {
    tipHTMLRep += tipAsHTML(tip)
  }

  contentElement.innerHTML += `
    ${tipHTMLRep}
  `

}