export const ELEMENTS = {
  MENUBAR: 'menubar',
  COMPOSE: 'compose',
  OVERLAY: 'overlay',
  MAIN_SECTION: 'main-section',
  FOOTER: 'footer',
  CONTENT: 'content',
  DESERT: 'desert'
};

const order = [
  ELEMENTS.DESERT,
  ELEMENTS.MAIN_SECTION,
  ELEMENTS.FOOTER,
  ELEMENTS.CONTENT,
  ELEMENTS.OVERLAY,
  ELEMENTS.COMPOSE,
  ELEMENTS.MENUBAR
];

export const zIndexFor = (element, yolo) => ({ zIndex: yolo ? 999999 : order.indexOf(element) });
