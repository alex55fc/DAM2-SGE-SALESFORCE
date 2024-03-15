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
                listaClicks += ",";
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

            var secuenciasGrabadas = component.get("v.secuenciasCadenaParaGuardar");
            var listaClicks  = component.get("v.cadenaClick");
            secuenciasGrabadas.push(listaClicks);
            component.set("v.secuenciasCadenaParaGuardar", secuenciasGrabadas);

            //mostrar en pantalla
            var displayedSequences = component.get("v.secuenciasCadenaDisplay");
            displayedSequences.push(listaClicks);
            component.set("v.secuenciasCadenaDisplay", displayedSequences);
            console.log("Deberia mostrarse la secuencia grabada");
        }
        else if (action === "safeRecording"){
            console.log("Guardando en la base de datos ");
            //llamada al metodo del apex insertSequence
            var action = component.get("c.insertSequence");
            var secuenciasGrabadas = component.get("v.secuenciasCadenaParaGuardar").join(" "); //une las secuencias grabadas

            //cambiamos el parametro del apex por el valor de las secuencias grabadas
            action.setParams({"newSequence": secuenciasGrabadas });
            action.setCallback(this, function(response){
                var state= response.getState();
                if (state === "SUCCESS"){
                    alert("Secuencias guardadas con exito");
                }
                else{
                    console.log("Error al guardar las secuencias");
                }
            });
            $A.enqueueAction(action);

        }   
        else if (action == "startPlay"){
            console.log("Iniciando reproducción de las secuencias por consola");
            var secuenciasGrabadas = component.get("v.secuenciasCadenaParaGuardar");
            var index = 0;
        
            if (secuenciasGrabadas && Array.isArray(secuenciasGrabadas)) {
                function reproducirSecuencia() {
                    if (index < secuenciasGrabadas.length) {
                        console.log("Secuencia " + (index + 1) + ": " + secuenciasGrabadas[index]);
                        index++; // Incrementa el índice después de imprimir el console.log
                        setTimeout(reproducirSecuencia, 3000); // Llama a reproducirSecuencia después de 1 segundo
                    }
                }
        
                setTimeout(reproducirSecuencia, 3000); // Llama a reproducirSecuencia por primera vez después de 1 segundo
            } else {
                console.log("No hay secuencias grabadas disponibles.");
            }
        }
        else if (action === "clearRecording"){
            component.set("v.doInitSecuenciaCadena", []);
            component.set("v.secuenciasCadenaDisplay", []);
        }
    },  
    doInit : function(component, event, helper) {
        var action = component.get("c.getListSequence");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                var secuencias = response.getReturnValue();
                component.set("v.doInitSecuenciaCadena", secuencias);
            }
            else{
                console.log("Error al cargar las secuencias");
            }
        });
        $A.enqueueAction(action);
    },
})
