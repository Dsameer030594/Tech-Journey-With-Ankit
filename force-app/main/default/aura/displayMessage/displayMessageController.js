({
    handleMessage: function (component, event, helper) {
        var fullName = event.getParam("fullName");
        alert(fullName);
    }
});
