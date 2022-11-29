// let currentPage = "";

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, pageId } = obj;
});

const newPage = () => {
  console.log("HERE IS TEST");
};

newPage();
