/**
 * If "this" `navItem` is "closed", make it "open"; if "this" `navItem` is "open"
 * make it "closed". If other `navItems` are "open" then close them, too.
 *
 * @todo FIX THIS FUNCTION!
 *
 * @param DOMEvent event
 * @return undefined
 */
function clickNavItem(event){

   if (isClosed(this.parentElement)){
     // Closes all of the parent elements (li) of the H3s (could use map, too)
     makeEverythingClosed(_.pluck(navItems, 'parentElement'));
     makeItOpen(this.parentElement);
   } else if (isOpen(this.parentElement)){
     makeItClosed(this.parentElement);
   }
};

/**
 * @param HTMLElement htmlElement
 * @return Boolean if `element` is "open"
 */
function isOpen(htmlElement){
  return (htmlElement.className === 'open');
}

/**
 * @param HTMLElement htmlElement
 * @return Boolean if `element` is "closed"
 */
function isClosed(htmlElement){
  return !isOpen(htmlElement);
}

/**
 * @param HTMLElement htmlElement
 * @return undefined
 */
function makeItOpen(htmlElement){
  htmlElement.className = 'open';
}

/**
 * @param HTMLElement htmlElement
 * @return undefined
 */
function makeItClosed(htmlElement){
  htmlElement.className = '';
}

/**
 * @param Collection elements
 * @return undefined
 */
function makeEverythingClosed(elements){
  return _.each(elements, makeItClosed);
  //_.each(elements, function(element){
  //  makeItClosed(element.parentElement);
  //});
}
