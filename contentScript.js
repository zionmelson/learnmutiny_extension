// let currentPage = "";

// chrome.runtime.onMessage.addListener((obj, sender, response) => {
//   const { type, value, pageId } = obj;

//   if (type === "NEW") {
//     currentPage = videoId;
//     newPage();
//   }
// });

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

const newPage = () => {
  console.log("HERE IS TEST");
};

newPage();
getCurrentTab();
