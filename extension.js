// adding a new bookmark
const bookmark = document.querySelector(".add-bookmark");
const urlPlaceholder = document.querySelector(".url");
const imagePlaceholder = document.querySelector(".page-image");
const titlePlaceholder = document.querySelector(".page-title");

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  let image = tabs[0].favIconUrl;
  let title = tabs[0].title;

  urlPlaceholder.innerHTML = url;
  imagePlaceholder.src = image;
  titlePlaceholder.innerHTML = title;
});

bookmark.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("query'd");
});
