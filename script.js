let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
}

const body = document.body;

function addDiv() {
    console.log('')
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
      body.classList.remove(body.classList[0]);
      const oldColor = targetDataColor(entry.target)
      console.log({oldColor});
      if(!oldColor) {
        const newColor = changeBackgroundColor();
        body.style.backgroundColor = newColor;
        const div = addDiv();
        div.setAttribute('data-color', newColor);
        div.innerText = newColor;
        //query for new div, to add to observer
        div.classList.add('latest')
        const divToObserve = document.querySelector(".latest")
        console.log({divToObserve})
        observer.observe(divToObserve)
        div.classList.remove('latest')
      } else {
        body.style.backgroundColor = oldColor;
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector("#scroll");
observer.observe(target);