({
    handleClick: function(component, event, helper) { 
        console.log("This is component : ", component);
        console.log("This is event : ", component);
        console.log("This is helper : ", component);
        var btnClicked = event.getSource();
        var btnMessage = btnClicked.get("v.label");
        component.set("v.message", btnMessage);
    },
    
    handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
    },
    
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
})