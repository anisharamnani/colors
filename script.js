document.addEventListener("scroll", function(event) {
  changeColor();
});

const changeColor = () => {
  const body = document.body;
  const panels = document.querySelectorAll('.panel');

  const scrollDepth = window.scrollY + (window.innerHeight / 3);

  panels.forEach(panel => {
    const panelTop = panel.getBoundingClientRect().top;
    const panelBottom = panel.getBoundingClientRect().bottom

    const isBelowTopOfPanel = panelTop <= scrollDepth
    const isAboveBottomOfPanel = panelBottom > scrollDepth
    
    const shouldUpdate = isBelowTopOfPanel && isAboveBottomOfPanel

    if (shouldUpdate) {
      body.classList.remove(body.classList[0]);
      body.classList.add(`color-${panel.dataset.color}`);
      const fragment = document.createDocumentFragment();
      const elemDiv = document.createElement('div');
      elemDiv.classList.add('panel');
      elemDiv.setAttribute('data-color', 'green');
      fragment.appendChild(elemDiv);
      const wrapper = document.querySelector('.wrapper');
      wrapper.appendChild(fragment);
    }
  });
}

// theory: where we put this document div implementation
// move adding the div outside of shouldupdate but where or how?