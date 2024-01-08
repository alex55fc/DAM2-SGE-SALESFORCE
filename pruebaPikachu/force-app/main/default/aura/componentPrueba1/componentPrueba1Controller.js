({
    myAction : function(component, event, helper) {

    },
    saludar : function(component, event, helper) {
        alert("Antes eras " + component.get("v.nombre")+ " y ahora eres !ALERT");
        component.set("v.nombre", "!ALERT");
    }
})

