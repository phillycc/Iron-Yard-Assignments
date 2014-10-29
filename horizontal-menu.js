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
     makeEverythingClosed(navItems);
     makeItOpen(this.parentElement);
     //otherwise if this navItem is open
   } else if (isOpen(this.parentElement)){
     makeItClosed(this.parentElement);
   }
};

/**
 * @param HTMLElement element
 * @return Boolean if `element` is "open"
 */
function isOpen(element){
  return (element.className === 'open') ? true : false;
}

/**
 * @param HTMLElement element
 * @return Boolean if `element` is "closed"
 */
function isClosed(element){
  return (element.className === '') ? true : false;
}

function makeItOpen(element){
  element.className = 'open';
}

function makeItClosed(element){
  element.className = '';
}

function makeEverythingClosed(elements){
  _.each(elements, function(element){
    element.parentElement.className = '';
  });
}
