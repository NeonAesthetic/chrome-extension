/**
 * Created by Ian Murphy on 9/29/2016.
 */
chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://slingapp.net";
    chrome.tabs.create({ url: newURL });
});

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        chrome.desktopCapture.chooseDesktopMedia(["screen"], sender.tab, function(id){
            sendResponse({media_id:id});
        });
        return true;
    }
);

