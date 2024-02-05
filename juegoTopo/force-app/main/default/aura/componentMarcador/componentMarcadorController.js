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
    },
    guardarScore : function(component, event, helper) {
        var insertScoreApex = component.get("c.insertScore");

        insertScoreApex.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert("exito")
            }
        });

        insertScoreApex.setParams({
             "nombre": "vuestronombre",
             "puntuacion": component.get("v.marcador")
         });
        //aqui se ejecuta la llamada a la clase de apex que inserta el score
        $A.enqueueAction(insertScoreApex);

    },
})
