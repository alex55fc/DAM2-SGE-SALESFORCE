({
    myAction : function(component, event, helper) {

    },
    // This is the function that will be called when the button is clicked, will change to an empty list
    clearList : function(component, event, helper) {
        component.set("v.lista", []);
    },
    addToList : function(component, event, helper) {
        var lista = component.get("v.lista");
        var item = event.getParam("nombre");
        lista.push(item);
        //este lista es el atributo de la lista del componente
        component.set("v.lista", lista);
    },
})