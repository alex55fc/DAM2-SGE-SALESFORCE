({
    myAction : function(component, event, helper) {

    },
    manejarEvento : function(component, event, helper) {
        var poitnsToAdd = event.getParam("molePoints");
        var marcador = component.get("v.marcador");
        if (poitnsToAdd > 0) {
            marcador += poitnsToAdd;
        }
        else{
            marcador = 0;
        }
        //con componen.set se cambia el valor de la variable marcador y se actualiza en la vista
        component.set("v.marcador", marcador);
    }
})
