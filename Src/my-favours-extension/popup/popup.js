const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.onclick = function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
            url: chrome.extension.getURL("images/background.jpg"),
            favicon: chrome.extension.getURL("icons/mf128x128.png"),
            tabId: tabs[0].id
        },
        function(response) {
          console.log("message with url sent");
          window.close();
        }
      );
    });
  };
}