import { themes } from "./modules/themes.js"

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const body = document.body;

function addDiv() {
  const fragment = document.createDocumentFragment();
  const elemDiv = document.createElement('div');
  const newColor = generateHSLValue();
  elemDiv.classList.add('panel');
  elemDiv.setAttribute('data-color', newColor);
  fragment.appendChild(elemDiv);
  const wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(fragment);
  return elemDiv;
}

function weightedRandomChoice(theme) {
  const totalWeight = theme.reduce((acc, color) => acc + color.frequency, 0);
  let randomNum = Math.random() * totalWeight;

  for (let i = 0; i < theme.length; i++) {
    if (randomNum < theme[i].frequency) {
      return theme[i];
    }
    randomNum -= theme[i].frequency; // why are we minus? 
  }
  // This shouldn't happen, but it's a fallback.
  return theme[theme.length - 1];
}

function selectRandomColor(theme = "night") {
  const themeColors = themes[theme];
  // this will be replaced 
  const randomColor = weightedRandomChoice(themeColors);
  return randomColor;
};

function generateHSLValue() {
  const randomColor = selectRandomColor();
  const hue = generateIndividualValue(randomColor.hue);
  console.log(randomColor);
  const saturation = generateIndividualValue(randomColor.saturation);
  const lightness = generateIndividualValue(randomColor.lightness);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generateIndividualValue(valueArray) {
  if(valueArray.length === 1) {
    return valueArray[0]
  } else {
    const min = valueArray[0];
    const max = valueArray[1];
    return Math.floor(Math.random() * (max - min) + min);
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

