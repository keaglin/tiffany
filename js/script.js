// const gallery = document.querySelector('.gallery');
// const overlay = document.querySelector('.overlay');
// const overlayImage = overlay.querySelector('img');
// const overlayClose = overlay.querySelector('.close');

// function handleClick(e) {
//   const src = e.currentTarget.querySelector('img').src;
//   overlayImage.src = src;
//   overlay.classList.add('open');
// }

// function close() {
//   overlay.classList.remove('open');
// }

// const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

// const html = digits.map(generateHTML).join('');
// gallery.innerHTML = html;

// const items = document.querySelectorAll('.item');

// items.forEach(item => item.addEventListener('click', handleClick));

// overlayClose.addEventListener('click', close);

// get photos
// need a function that will call the unsplash API to get a list of photos
// save the list to a const array
// return the const

// display photos inside grid items
// imgSrc = (kw) => {
// fetch(`https://source.unsplash.com/weekly?${kw}`)
// .then(res => addImage(res))
// }

// function imgSrc(kw) {
//   fetch(`https://source.unsplash.com/weekly?${kw}`)
//     .then(res => addImage(res))
//     .catch(err => console.log("Something went wrong", err));
// }

// for each grid item, insert an image from the photos array
// console.log(res.json())
// img = document.createElement('img')
// img.createAttribute('src', )
// item.appendChild(photo)
// function addImage(imgRes) {
function addImage() {
  // console.log("imgRes is", imgRes);
  // console.log("imgRes.url", imgRes.url);
  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    // fetch(`https://source.unsplash.com/weekly?${kw}`)
    fetch("https://source.unsplash.com/collection/155174")
      .then(res => {
        // console.log('testing')
        const img = document.createElement("img");
        // img.createAttribute('src')
        img.setAttribute("src", res.url);
        img.style = "object-fit: cover; overflow:hidden; width: 100%; height: 100%;";
        item.appendChild(img);
      })
      .catch(err => console.log("Something went wrong", err));
  });
}

// on every grid item, we need an event listener
// listen for hover
// on hover, show a mini product window
// on click, go to product page

function showMini(e) {
  e.target.style.background = "purple";
  console.log("event listener working for", e.target);
}

function addHoverListener() {
  const items = document.querySelectorAll("item");
  items.forEach(item => {
    item.addEventListener("mouseenter", showMini);
  });
}

function init() {
  addHoverListener();
  addImage("rug");
}

init();
