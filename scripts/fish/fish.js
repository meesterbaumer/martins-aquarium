// this will render individdual fish objects as HTML

export const fishAsHTML = (fishObj) => {
  return `
  <section class="fish">
  <img src="${fishObj.image}" class="fish__image" alt="">
  <p class="fish__name">${fishObj.name}</p>
  <p class="fish__species">${fishObj.species}</p>
  <p class="fish__length">${fishObj.length}</p>
  <p class="fish__location">${fishObj.location}</p>
  <p class="fish__diet">${fishObj.food}</p>
  </section>
  `
}