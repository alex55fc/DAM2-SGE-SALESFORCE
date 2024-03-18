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

    },
    saveScore : function(component, event, helper) {
        var apexInsert = component.get("c.insertScore");
        var nomJugador = component.find("nombreJugador").getElement().value;
        
        console.log('Nombre jugador: '+ nomJugador);
        apexInsert.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert("Exito  al guardar al jugador con su score")
            }
        });
        apexInsert.setParams({
            "nombre": nomJugador, 
            "puntacion": component.get("v.marcador")
        });
        $A.enqueueAction(apexInsert);
    },
})
