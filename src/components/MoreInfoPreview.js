import { detailsPreview } from './DetailsPreview';
import { keywordsPreview } from './KeywordsPreview';
import { externalLinksPreview } from './ExternalLinksPreview';

export const moreInfoPreview = (
  itemCountry,
  itemLanguage,
  releaseDateFormated,
  status,
  homepage,
  externalIds,
  title,
  media,
  keywords
) => {

  const detailsPanel = detailsPreview(
    itemCountry,
    itemLanguage,
    releaseDateFormated,
    status
  );

  const keywordsPanel = keywordsPreview(keywords);

  const linksPanel = externalLinksPreview(externalIds, homepage, title, media);

  const moreInfoPanel =
    `
      <div class="more-info">
        ${detailsPanel}
        ${keywordsPanel}
        ${linksPanel}
    </div>
      `;

  return moreInfoPanel;
}