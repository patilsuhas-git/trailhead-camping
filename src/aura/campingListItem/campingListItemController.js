({
    packItem : function(component, event, handler) {
        console.log("Reached here");
        component.set("v.item", component.get("v.item", true).Packed__c = true);
        event.getSource().set("v.disabled", true);
    }
})