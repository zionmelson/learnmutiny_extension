// let currentPage = "";

// chrome.runtime.onMessage.addListener((obj, sender, response) => {
//   const { type, value, pageId } = obj;

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, pageId } = obj;

  if (type === "NEW") {
    currentPage = videoId;
    newPage();
  }
});

const newPage = () => {
  console.log("HERE IS TEST");
};

newPage();
getCurrentTab();
