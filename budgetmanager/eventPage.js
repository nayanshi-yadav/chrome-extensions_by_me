var contextMenuItem = {
    "id": "spendMoney",
    "title":"Spend Money",
    "contexts":["selection"]
};

    function isInt(value){
        return !isNaN(value) &&
            parseInt(Number(value))==value &&
            !isNaN(parseInt(value,10));
    }
    chrome.contextMenus.create(contextMenuItem);


chrome.contextMenus.onclicked.addListener(function(clickData){
    if (clicData.menuItemId == "spendMoney" && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total','limit'],function(budget){
                var newTotal =0;
                if(budget.total){
                    newTotal+=parseInt(budget.total);

                }
                newTotal+=parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total':newTotal}, function(){
                    if(newTotal>=budget.limit){
                        var notifOptions={
                            type:'basic',
                            iconUrl:'icon48.png',
                            title:"Resetting Total",
                            message:"Total has been reset to zero."
                        };
                    chrome.notifications.create('limitNotif',notifOptions);
                    }
                });
            });
        }
    }
});


chrome.storage.onChanged.addListener(function(changes,storageName){
    chrome.browserAction.setBadgeText({"text": changes.total.newvalue.toString()});
});