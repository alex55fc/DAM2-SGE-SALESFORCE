({
    saludar : function(component, event, helper) {
        alert("Antes eras " + component.get("v.nombre")+ " y ahora eres !ALERT");
        component.set("v.nombre", "!ALERT");
        //triggers an event
        var evt = $A.get("e.c:evtData");
        var obj = {
            "nombre" : component.get("v.nombre"),
            "apellido" : "!ALERT",
            };
        evt.setParams(obj);
        evt.fire();
    }
})

