// background.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        if (changeInfo.url.includes('news.yahoo.co.jp')) {
            chrome.tabs.update(tabId, {url: 'https://news.google.com/'});
        }
    }
});
