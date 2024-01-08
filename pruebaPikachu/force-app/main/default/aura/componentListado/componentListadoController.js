({
    myAction : function(component, event, helper) {

    },
    // This is the function that will be called when the button is clicked, will change to an empty list
    clearList : function(component, event, helper) {
        component.set("v.items", []);
    },

})
