// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()


// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector(".links-container");
const linksToggle = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    //linksContainer.classList.toggle('show-links')
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = linksToggle.getBoundingClientRect().height
    
    containerHeight === 0
        ? (linksContainer.style.height = `${linkHeight}px`)
        : linksContainer.style.height = 0;
    
})
const navBar = document.getElementById('nav')
const topNav = document.querySelector('.top-link')
// ********** fixed navbar ************
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height
    scrollHeight > navHeight ? navBar.classList.add('fixed-nav') : navBar.classList.remove('fixed-nav')
    
    scrollHeight > 500 ? topNav.classList.add('show-link') :
        topNav.classList.remove('show-link')
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      const navHeight = navBar.getBoundingClientRect().height;
      let position = element.offsetTop - navHeight;
      const containerHeight = linksContainer.getBoundingClientRect().height;
   const fixedNav = navBar.classList.contains("fixed-nav");
      if (!fixedNav) {
        position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight
        }

   
      window.scrollTo({
        left: 0,
        top: position,
      });
      linksContainer.style.height = 0;
    })
})