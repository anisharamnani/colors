$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();

$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  const scrollDepth = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    const panelTop = $this.position().top
    const panelBottom = $this.position().top + $this.height()
    
    const isBelowTopOfPanel = panelTop <= scrollDepth
    const isAboveBottomOfPanel = panelBottom > scrollDepth
    
    const shouldUpdate = isBelowTopOfPanel && isAboveBottomOfPanel
  
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if (shouldUpdate) {
      console.log('update triggered!', {scrollDepth}, {panelTop}, {panelBottom})
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();




document.addEventListener("scroll", function(event) {
  checkForNewDiv();
});

const checkForNewDiv = () => {
  const body = document.body;
  const panels = document.querySelectorAll('.panel');

  let scroll = window.scrollY + (window.innerHeight / 3);

  panels.forEach(panel => {
    console.log(panel);
  });
}

checkForNewDiv();