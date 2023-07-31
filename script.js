import { themes } from "./modules/themes.js"

console.log({themes});

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const body = document.body;

function addDiv() {
  const fragment = document.createDocumentFragment();
  const elemDiv = document.createElement('div');
  const newColor = changeBackgroundColor();
  elemDiv.classList.add('panel');
  elemDiv.setAttribute('data-color', newColor);
  fragment.appendChild(elemDiv);
  const wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(fragment);
  return elemDiv;
}

function changeBackgroundColor() {
  const randomColorSelector = Math.random();
  if(randomColorSelector > 0.7) {
    return generateRandomBlue();
  } else if(randomColorSelector > 0.35)
    return generateRandomSandColor();
  else {
    return generateRandomPinkColor();
  }
}


function changeMidnightBackgroundColor() {
  const randomColorSelector = Math.random();
  if(randomColorSelector > 0.6) {
    return generateMidnightBlue();
  } else if(randomColorSelector > 0.2)
    return generateRandomPurple();
  else {
    return generateRandomStreetLightColor();
  }
}

function targetDataColor(target) {
  return target.getAttribute('data-color');
}

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const color = targetDataColor(entry.target);
      body.style.backgroundColor = color;

      const target = entry.target;
      const finalPanelDiv =
        target.parentNode.children[target.parentNode.children.length - 1];

      if (target === finalPanelDiv) {
        addDiv();
      }
    }
  });
};

// Function to observe an element
function observeIntersectionElement(element) {
  observer.observe(element);
}

// Create a MutationObserver instance
const mutationObserver = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === Node.ELEMENT_NODE) {
          observeIntersectionElement(addedNode);
        }
      });
    }
  }
});

const parentElement = document.querySelector('.wrapper');
const observerConfig = { childList: true };

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector('#scroll');
observer.observe(target);
mutationObserver.observe(parentElement, observerConfig);
