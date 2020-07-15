// this component will render an individual quote as HTML

export const quoteAsHTML = (quoteObj) => {
  return `
      <section class="quote">
      <h3 class="quote__text"><strong>"${quoteObj.quote}" </strong><em>${quoteObj.author}</em></h3>
      </section>
  `
}