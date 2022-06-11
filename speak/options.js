$(function() {
    var lan=$("#lan").val();
    chrome.storage.sync.set({'lan':lan},function(callback)
    {
    if($("#btn").click())
          {
              $("#btn").click(function(){
        $("#btn").val("your language is saved");
    }
        )
    }

        console.log("thankyou")
        console.log('lan')
    });


});