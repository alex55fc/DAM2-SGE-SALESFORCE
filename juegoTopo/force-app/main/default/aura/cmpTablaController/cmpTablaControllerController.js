({
    myAction : function(component, event, helper) {

    },
    doInit : function(component, event, helper) {
        var getListScores = component.get("c.getListScores");

        getListScores.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var accounts = response.getReturnValue();
                component.set("v.puntuaciones", accounts);
            }
        });
        $A.enqueueAction(getListScores);
    }

       
        
})
