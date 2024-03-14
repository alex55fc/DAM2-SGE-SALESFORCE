({
    myAction : function(component, event, helper) {

    },
    botonClicked : function(component, event, helper) {
        //mira si el isRecording esta activo, para eso teniamos que darle a grabarpreviamente
        if(component.get("v.isRecording")){
            //esto es para obtener el valor del boton que se ha pulsado
            var valueClick = event.getSource().get("v.label");

            var listaClicks = component.get("v.cadenaClick");
            if (listaClicks.length > 0){
                listaClicks = listaClicks + ",";
            }
            listaClicks += valueClick;
            component.set("v.cadenaClick", listaClicks);
        }

    },
    handleGameEvent : function(component, event, helper) {
        var action = event.getParam("actionEvent");
        if (action === "startRecording"){
            component.set("v.cadenaClick", "");
            component.set("v.isRecording", true);
        }
        else if(action === "stopRecording"){

            component.set("v.isRecording", false);
            var secuenciasGrabadas = component.get("v.secuenciasCadenaClick");
            var listaClicks  = component.get("v.cadenaClick");
            secuenciasGrabadas.push(listaClicks);
            component.set("v.secuenciasCadenaClick", secuenciasGrabadas);

            // reseteamoslalistaClick para que al darle a grabar de nuevo se guarden nueva secuencias
            component.set("v.cadenaClick", "");

        }
        else if (action === "safeRecording"){
            console.log("Guardando en la base de datos ");
            //llamada al metodo del apex insertSequence
            var action = component.get("c.insertSequence");
            var secuenciasGrabadas = component.get("v.secuenciasCadenaClick").join(" "); //une las secuencias grabadas

            //cambiamos el parametro del apex por el valor de las secuencias grabadas
            action.setParams({"newSequence": secuenciasGrabadas });
            action.setCallback(this, function(response){
                var state= response.getState();
                if (state === "SUCCESS"){
                    alert("Guardado con exito");
                }
                else{
                    console.log("Error al guardar las secuencias");
                }
            });
            $A.enqueueAction(action);

        }
    }
})
