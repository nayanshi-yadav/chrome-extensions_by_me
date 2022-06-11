var menuItem = {
    "id":"speak",
    "title":"speak",
    "contexts":["selection"]
};
chrome.contextMenus.create(menuItem);
// chrome.storage.sync.get('lan',function(){
//      console.log('lan')
// })
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="speak" && clickData.selectionText){
        chrome.tts.speak(clickData.selectionText, 
            {'lang': 'en-US','rate':0.7,'enqueue':true},function() {
                if (chrome.runtime.lastError) {
                  console.log('Error: ' + chrome.runtime.lastError.message);
                }
              }
        );
    }
});