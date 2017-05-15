/**
 * Created by Ian Murphy on 9/29/2016.
 */
chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://slingapp.net";
    chrome.tabs.create({ url: newURL });
});

chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        if(request) {
            if (request.message) {
                if(request.message == "version") {
                    sendResponse({version: '1.0'});
                    return true;
                }
            }
            chrome.desktopCapture.chooseDesktopMedia(["screen"], sender.tab, function (id) {
                sendResponse({media_id: id});
            });
        }
        return true;
    }
);

