({
    clickCreateItem : function(component, event, helper) {
        var validItem = true;
        // To check if camping item name is not blank.
        if($A.util.isEmpty(component.find("campingitemname").get("v.value"))) {
            validItem = false;
            component.find("campingitemname").set("v.errors", [{message:"Item name can't be blank."}]);
        } else {
            component.find("campingitemname").set("v.errors", null);
        }
        
        if($A.util.isEmpty(component.find("quantity").get("v.value"))) {
            validItem = false;
            component.find("quantity").set("v.errors", [{message:"Quantity can't be blank."}]);
        } else {
            component.find("quantity").set("v.errors", null);
        }
        
        if($A.util.isEmpty(component.find("price").get("v.value"))) {
            validItem = false;
            component.find("price").set("v.errors", [{message:"Price can't be blank."}]);
        } else {
            component.find("price").set("v.errors", null);
        }
        
        if(validItem) {
            var itemLst = component.get("v.items");
            var newItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
            console.log("Expenses before 'create': " + JSON.stringify(itemLst));
            itemLst.push(newItem);
            component.set("v.items", itemLst);
            console.log("Expenses after 'create': " + JSON.stringify(itemLst));
            component.set("v.newItem",{'sobjectType':'Camping_Item__c',
                'Name': '',
                'Quantity__c': 0,
                'Price__c': 0,
                'Packed__c': false})
        }
        
        var newItem = component.get("v.newItem");
        helper.createItem(component, newItem);
    }, 
    
    doInit : function(component, event, helper) {
        var action = component.get('c.getItems');
        action.setCallback(this, function(response) {
            if (component.isValid() && response.getState() === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})