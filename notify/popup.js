$(function(){
    $('#click').click(function(){
     var options = {
         type:"basic",
         iconUrl:"icon48.png",
         title:"notificationwa",
         message:"hello i am your notification"
     };
     chrome.notifications.create('notifId',options);
    });
    }
);