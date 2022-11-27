chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url) {
    const path = tab.url.split(".com/")[1];
    // const page = tab.url.split("www.")[1];
    // looking to add page type i.e youtube or w3schools

    const pathUrl = new URLSearchParams(path);

    console.log(pathUrl);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      pageId: pathUrl,
      // pageType:
    });
  }
});
