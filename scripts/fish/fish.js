// this will render individdual fish objects as HTML

export const fishAsHTML = (fishObj) => {
  return `
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front fish">
      <img src="${fishObj.image}" style="width:200px;height:200px;" class="fish__image" alt="">
      </div>
      <div class="flip-card-back">
        <p class="fish__name">Name: ${fishObj.name}</p>
        <p class="fish__species">Species: ${fishObj.species}</p>
        <p class="fish__length">length: ${fishObj.length}</p>
        <p class="fish__location">Captured: ${fishObj.location}</p>
        <p class="fish__diet">Diet: ${fishObj.food}</p>
      </div>
    </div>
  </div>
  `
}