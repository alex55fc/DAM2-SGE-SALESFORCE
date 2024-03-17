({
    myAction : function(component, event, helper) {

    },
    manejarEvento : function(component, event, helper) {
        var topoPoints = event.getParam("topoPoints");
        var  marcador = component.get("v.marcador");
        if (topoPoints > 0) {
            marcador += topoPoints;
        }
        else{
            marcador = 0;
        }
        component.set("v.marcador", marcador);

    }
})
