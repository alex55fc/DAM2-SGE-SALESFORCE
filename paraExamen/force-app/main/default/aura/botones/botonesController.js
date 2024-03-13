({
    myAction : function(component, event, helper) {

    },
    botonClicked : function(component, event, helper) {
        //esto es para obtener el valor del boton que se ha pulsado
        var valueClick = event.getSource().get("v.label");

        var lista = component.get("v.cadenaClick");
        if (lista.length > 0){
            lista = lista + ",";
        }
        lista += valueClick;
        component.set("v.cadenaClick", lista);
    }
})
