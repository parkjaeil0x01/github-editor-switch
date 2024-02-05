chrome.action.onClicked.addListener((tab) => {
  const url = new URL(tab.url);
  if (url.hostname === "github.com") {
    const newUrl = url.toString().replace("github.com", "github.dev");
    chrome.tabs.update(tab.id, {url: newUrl});
  } else if (url.hostname === "github.dev") {
    const newUrl = url.toString().replace("github.dev", "github.com");
    chrome.tabs.update(tab.id, {url: newUrl});
  }
});
