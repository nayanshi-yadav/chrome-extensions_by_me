var menuItem={
    "id":"GFG_it",
    "title":"GFG_it",
    "contexts":["selection"]
};
chrome.contextMenus.create(menuItem);
function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');

}
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="GFG_it" && clickData.selectionText){
        var SUrl="https://www.geeksforgeeks.org/" + fixedEncodeURI(clickData.selectionText);
        var createData={
            "url":SUrl,
            "type":"popup",
            "top":5,
            "left":5,
            "width":screen.availWidth/2,
            "height":screen.availHeight/2
        };
        chrome.windows.create(createData,function(clickData){});
    }
});