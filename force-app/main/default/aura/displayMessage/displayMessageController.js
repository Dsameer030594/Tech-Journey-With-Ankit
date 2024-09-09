({
    handleMessage: function (component, event, helper) {
        var fullName = event.getParam("fullName");
        alert(fullName);
    }
});

/* notes: 
From Aura you can Invoke LWC  

From LWC You cannot invoke AURA. This is not possible
*/