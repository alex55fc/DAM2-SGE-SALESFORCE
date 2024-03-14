({
    myAction : function(component, event, helper) {

    },
    startRecording : function(component, event, helper) {
        var evt =$A.get("e.c:gameEvent");
        evt.setParams({
            "actionEvent": "startRecording"
        });
        evt.fire();
    },
    stopRecording : function(component, event, helper) {
        var evt =$A.get("e.c:gameEvent");
        evt.setParams({
            "actionEvent": "stopRecording"
        });
        evt.fire();
    },    
    startPlay : function(component, event, helper) {
        var evt =$A.get("e.c:gameEvent");
        evt.setParams({
            "actionEvent": "startPlay"
        });
        evt.fire();
    },    
    safeRecording : function(component, event, helper) {
        var evt =$A.get("e.c:gameEvent");
        evt.setParams({
            "actionEvent": "safeRecording"
        });
        evt.fire();
    },    
    clearRecording : function(component, event, helper) {
        var evt =$A.get("e.c:gameEvent");
        evt.setParams({
            "actionEvent": "clearRecording"
        });
        evt.fire();
    },
})
