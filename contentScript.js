() => {
  let currentPage = "";

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, pageId } = obj;

    if (type === "NEW") {
      currentPage = videoId;
      newPage();
    }
  });

  const newPage = () => {};
};
