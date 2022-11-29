// adding a new bookmark

const extension = document.querySelector(".bookmarks");
const bookmark = document.querySelector(".add-bookmark");
const urlPlaceholder = document.querySelector(".url");
const imagePlaceholder = document.querySelector(".page-image");
const titlePlaceholder = document.querySelector(".page-title");

const defaultText = document.querySelector(".default-text");

chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;

  if (!url.startsWith("chrome://")) {
    let image = tabs[0].favIconUrl;
    let title = tabs[0].title;

    urlPlaceholder.innerHTML = url;
    imagePlaceholder.src = image;
    titlePlaceholder.innerHTML = title;

    bookmark.addEventListener("click", async (e) => {
      e.preventDefault();
      const encrypted = await encryptLink(url);
      displayEncryptedLink(encrypted);
    });
  } else {
    setDefault();
  }
});

function setDefault() {
  extension.className = "default-bookmark";

  imagePlaceholder.src = "assets/bear.png";
  imagePlaceholder.className = "default-page-image";

  bookmark.className = "default-button";

  defaultText.innerHTML =
    "Looks like there's nothing to bookmark on this page.";
}

async function encryptLink(_url) {
  const encodedParams = new URLSearchParams();
  encodedParams.append("url", `${_url}`);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `cb59b130f6mshb1b2069997b5241p17b9cfjsn983efb4679e3`,
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: encodedParams,
  };

  const fetched = await fetch(
    "https://url-shortener-service.p.rapidapi.com/shorten",
    options
  );
  const response = await fetched.json();
  return response;
}

function displayEncryptedLink(short) {
  urlPlaceholder.innerHTML = `
  <h4>Bookmarked link:</h4> 
  <h4>${short.result_url}</h4>`;
}
