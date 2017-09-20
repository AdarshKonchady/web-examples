var images = [
  'http://mehulnair.com/img/portfolio/nature-05.jpg',
  'http://mehulnair.com/img/portfolio/nature-03.jpg',
  'http://mehulnair.com/img/portfolio/nature-02.jpg'
];
images = images.map(imgId => {
  var img = document.createElement('img');
  img.setAttribute('data-src', imgId);
  img.classList = 'js-lazy-image';
  document.getElementById('container').appendChild(img);
  return img;
});

var lazyImages = document.querySelectorAll('js-lazy-image');
const config = {
  // If the image gets within 50px in the Y axis, start the download.
  rootMargin: '50px 0px'
  // threshold: [0.5]
};
// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config);
images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  img.setAttribute('src', img.dataset.src);
}

function onIntersection(entries) {
  // Loop through the entries
  entries.forEach(entry => {
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {
      // Stop watching and load the image
      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  });
}
