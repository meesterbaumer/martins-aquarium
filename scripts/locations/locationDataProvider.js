const locationCollection = [
  {
    name: "Great Barrier Reef",
    url: "https://greatbarrierreef.org",
    urlText: "greatbarrierreef.org",
    description: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef.",
    image: "./images/greatbarrierreef.jpg",
    altText: "Great Barrier Reef from an airplane"
  },
  {
    name: "Komodo National Park",
    url: "https://www.komodonationalpark.org",
    urlText: "komodonationalpark.org",
    description: "The reefs are thriving with an abundance of exotic undersea life, including dugongs, manta rays, sharks, and over 1000 species of tropical fish.",
    image: "./images/komodo.jpg",
    altText: "Crystal clear waters with reef below and land in the background"
  },
  {
    name: "Devil's Crown",
    url: "https://www.galapagosislands.com/floreana/devils-crown.html",
    urlText: "galapogosislands.com",
    description: "Located off of Floreana Island, the Devil's Crown is a ring of jagged rocks that jut out of the water not too far from shore. They get their name from the fact that they look roughly like a crown",
    image: "./images/devilscrown.jpg",
    altText: "ocean with jagged rocky islands"
  },
  {
    name: "Baa Atoll",
    url: "https://en.wikipedia.org/wiki/Baa_Atoll",
    urlText: "Baa Atoll Wiki",
    description: "The 1,200 picture-perfect coral islands are surrounded by aquamarine waters, home to hundreds of vivid fish species and other marine animals, including sharks, octopii, and manta rays.",
    image: "./images/baaatoll.jpg",
    altText: "edge of an island with the reef exposed from the air"
  }
]
export const useLocation = () => {
  return locationCollection.slice()
}