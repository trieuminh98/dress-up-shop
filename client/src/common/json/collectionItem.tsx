import collectionItemDress from 'assets/images/collection-item-dresses.jpg';
import collectionItemBasics from 'assets/images/collection-item-basics.jpg';
import collectionItemFallTrend from 'assets/images/collection-item-fall-trend.jpg';
import collectionItemTops from 'assets/images/collection-item-tops.jpg';
import promoteItemOutfitInspo from 'assets/images/promote-item-outfit-inspo.jpg';
import promoteItemLayerUp from 'assets/images/promote-item-layer-up.jpg';
import productItem1Static from 'assets/images/product-item-1-static.jpg';
import productItem1Hover from 'assets/images/product-item-1-hover.jpg';
import productItem2Static from 'assets/images/product-item-2-static.jpg';
import productItem2Hover from 'assets/images/product-item-2-hover.jpg';
import productItem3Static from 'assets/images/product-item-3-static.jpg';
import productItem3Hover from 'assets/images/product-item-3-hover.jpg';
import productItem4Static from 'assets/images/product-item-4-static.jpg';
import productItem4Hover from 'assets/images/product-item-4-hover.jpg';

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
  productItems: [
    {
      id: 'PPI1',
      label: 'Red Glory Glory Script Tee',
      price: '$ 32.00',
      staticSrc: productItem1Static,
      hoverSrc: productItem1Hover,
    },
    {
      id: 'PPI2',
      label: 'Black Georgia Pullover',
      price: '$ 48.00',
      staticSrc: productItem2Static,
      hoverSrc: productItem2Hover,
    },
    {
      id: 'PPI3',
      label: 'White Georgia Pullover',
      price: '$ 48.00',
      staticSrc: productItem3Static,
      hoverSrc: productItem3Hover,
    },
    {
      id: 'PPI4',
      label: 'In Kirby We Trust Tee',
      price: '$ 32.00',
      staticSrc: productItem4Static,
      hoverSrc: productItem4Hover,
    },
  ],
};

export default displayItems;
