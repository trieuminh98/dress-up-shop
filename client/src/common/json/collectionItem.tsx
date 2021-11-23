import collectionItemDress from 'assets/images/collection-item-dresses.jpg';
import collectionItemBasics from 'assets/images/collection-item-basics.jpg';
import collectionItemFallTrend from 'assets/images/collection-item-fall-trend.jpg';
import collectionItemTops from 'assets/images/collection-item-tops.jpg';
import promoteItemOutfitInspo from 'assets/images/promote-item-outfit-inspo.jpg';
import promoteItemLayerUp from 'assets/images/promote-item-layer-up.jpg';

const displayItems = {
  collectionItems: [
    {
      id: 'CI1',
      label: 'Dresses',
      src: collectionItemDress,
    },
    {
      id: 'CI2',
      label: 'Basics',
      src: collectionItemBasics,
    },
    {
      id: 'CI3',
      label: 'Fall Trend',
      src: collectionItemFallTrend,
    },
    {
      id: 'CI4',
      label: 'Tops',
      src: collectionItemTops,
    },
  ],
  promoteItems: [
    {
      id: 'PI1',
      label: 'Layer Up',
      subLabel: "'Tis the season to",
      buttonLabel: 'Shop Knits',
      src: promoteItemLayerUp,
    },
    {
      id: 'PT2',
      label: 'Outfit inspo',
      subLabel: 'Cool weather',
      buttonLabel: 'Shop all new',
      src: promoteItemOutfitInspo,
    },
  ],
};

export default displayItems;
