let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
}

const body = document.body;

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      body.classList.remove(body.classList[0]);
      body.style.backgroundColor = 'purple';
      console.log('intersecting!')
    }
  });
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector("#scroll");
observer.observe(target);

// update the target of what we're observing
// shunt in the next div
// somehow use the new div to update the color of the body

// old code: 
// -    if (shouldUpdate) {
//   -      body.classList.remove(body.classList[0]);
//   -      body.classList.add(`color-${panel.dataset.color}`);
//   -      const fragment = document.createDocumentFragment();
//   -      const elemDiv = document.createElement('div');
//   -      elemDiv.classList.add('panel');
//   -      elemDiv.setAttribute('data-color', 'green');
//   -      fragment.appendChild(elemDiv);
//   -      const wrapper = document.querySelector('.wrapper');
//   -      wrapper.appendChild(fragment);
//   -    }
//   -  });