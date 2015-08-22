chrome.omnibox.onInputEntered.addListener(function(text) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.update(tabs[0].id, { url: 'https://www.google.com/maps/?q=' + text });
    });
});
