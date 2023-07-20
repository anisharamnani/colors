let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
}

const body = document.body;

function addDiv() {
    const fragment = document.createDocumentFragment();
    const elemDiv = document.createElement('div');
    elemDiv.classList.add('panel');
    fragment.appendChild(elemDiv);
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(fragment);
    return elemDiv;
}

function generateRandomBlue() {
  return Math.floor(Math.random()*(235-188)+188);
}

function changeBackgroundColor() {
  const randomHue = generateRandomBlue();
  return `hsl(${randomHue}, 100%, 50%)`
}

function targetDataColor(target) {
  return target.getAttribute('data-color')
}

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log({entry});
      const oldColor = targetDataColor(entry.target)
      console.log({oldColor});
      if(!oldColor) {
        const newColor = changeBackgroundColor();
        body.style.backgroundColor = newColor;
        const div = addDiv();
        // div.setAttribute('data-color', newColor);
        div.innerText = newColor;
      } else {
        body.style.backgroundColor = oldColor;
      }
    }
  });
};

// Function to observe an element
function observeIntersectionElement(element) {
  console.log('OBSERVING!!', {element})
  observer.observe(element);
}

// Create a MutationObserver instance
const mutationObserver = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    console.log('MUTATION!', {mutation})
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
    // Handle the added nodes
      mutation.addedNodes.forEach((addedNode) => {
      // Check if the added node is an element
        if (addedNode.nodeType === Node.ELEMENT_NODE) {
        // Add the added node to be observed
        console.log('PASSING ELEMENT', {addedNode})
          observeIntersectionElement(addedNode);
        }
      });
    }
  }
 });

const parentElement = document.querySelector('.wrapper');
const observerConfig = { childList: true }

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector("#scroll");
observer.observe(target);
console.log(parentElement)
mutationObserver.observe(parentElement, observerConfig);