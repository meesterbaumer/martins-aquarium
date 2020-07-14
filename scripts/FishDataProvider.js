const fishCollection = [
  {
      image: "./images/bulldogstargazer.jpg",
      name: "Bull",
      species: "Bluedog Stargazer",
      length: "4 inches",
      location: "Great Barrier Reef",
      food: "Plankton"
  },
  {
      image: "./images/malejawfish.jpg",
      name: "Jaws",
      species: "Jaw Fish",
      length: "3-4 Inches",
      location: "At the beach",
      food: "People"
  },
  {
      image: "./images/frogfish.jpg",
      name: "Froggy",
      species: "Common Frog Fish",
      length: "9 Inches",
      location: "Birmingham, AL",
      food: "Sand"
  },
  {
      image: "./images/coffinfish.jpg",
      name: "Dracula",
      species: "Common Coffinfish",
      length: "6 Feet",
      location: "Transylvania",
      food: "Blood of it's victims"
  },
  {
      image: "./images/orandagoldfish.jpg",
      name: "Einstein",
      species: "Orange Goldfish",
      length: "6-8 Inches",
      location: "Nashville, TN",
      food: "Knowledge"
  },
  {
      image: "./images/blobfish.jpg",
      name: "Pinky",
      species: "Blob Fish",
      length: "varies",
      location: "East Coast",
      food: "Diet Coke and French Fries"
  },
  {
      image: "./images/boxfish.jpg",
      name: "Square",
      species: "Box Fish",
      length: "12 Inches",
      location: "Topeka, KS",
      food: "Cardboard"
  }
]
export const useFish = () => {
  return fishCollection.slice()
}