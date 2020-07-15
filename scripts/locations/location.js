// Renders the individual HTML string

export const locationAsHTML = (locationObj) => {
  return `
    <section class="location card">
    <img src="${locationObj.image}" class="location__image" alt="${locationObj.altText}">
    <h2 class="location__name">${locationObj.name}</h2>
    <a href="${locationObj.url}" class="location__url" >${locationObj.urlText}</a>
    <p class="location__desc">${locationObj.description}</p>
    </section>
  `
}