
// // helpers
// const clog = console.log;


// // Scroll

// // getting current scroll values (how much user has scrolled horizontally and vertically)
// clog('Current scroll (X: hori/Y: veri)', window.pageXOffset, window.pageYOffset);

// // getting coordinates of an element
// clog('Current position of cookie close btn', document.querySelector('.btn--close-cookie').getBoundingClientRect());

// // viewport height and width
// clog('height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth    
// );

// Intersection Observer API

// Lazy Loading images
// Great for performance - initially load very low resolution images with a blur effect on it,
// and only reveal the actual original image as the user scrolls
// Great performance for those with low bandwidth or low processing or storage (mobile etc.)
// Don't remove blur right away, because the image might not have loaded yet (depends on user's network)
// load it a little earlier than the image enters viewport, so user doesn't know we're lazy loading