({
//    clickCreateExpense : function(component, event, helper) {
//        var validExpense = true;
//        // Check for Expense Name.
//        if($A.util.isEmpty(component.find("expname").get("v.value"))) {
//            validExpense = false;
//            component.find("expname").set("v.errors", [{message:"Expense name can't be blank."}]);
//        } else {
//            component.find("expname").set("v.errors", null);
//        }
//        
//        //Check for Amount.
//        if($A.util.isEmpty(component.find("amount").get("v.value"))) {
//            validExpense = false;
//            component.find("amount").set("v.errors", [{message:"Amount can't be blank."}]);
//        } else {
//            component.find("amount").set("v.errors", null);
//        }
//        
//        if(validExpense) {
//            var newExpense = component.get("v.newExpense");
//            console.log("Create expense: " + JSON.stringify(newExpense));
//            helper.createExpense(component, newExpense);
//        }
//    },
    
    clickCreateExpense: function(component, event, helper) {
	    if(helper.validateExpenseForm(component)){
	        // Create the new expense
	        var newExpense = component.get("v.newExpense");
	        helper.createExpense(component, newExpense);
	    }
	},
    
    // Load expenses from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getExpense");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            if (component.isValid() && response.getState() === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})