export const keywordsPreview = (keywordsList) => {
  const keywordItems = keywordsList.map(keyword => {
    return `<li class="keywords__item">${keyword}</li>`
  });


  const keywords =
    `
      <section class="panel keywords__panel">
        <div class="panel__heading facts__heading">
          <h4>Keywords</h4>
        </div>
        <ul class="keywords__list">
          ${keywordItems.join('\n')}
        </ul>
      </section>
    `;

  return keywords;
};