({
       
    doInit: function(cmp) {
        var topo = cmp.find("topoId");
        //math random devuelve un numero entre 0 y 1
        /*esta forma de hacer un if else es mas corta, hacerla cuando solo ocupe una linea corta, tambn en java
        Math.random() < 0.5 ? 
            $A.util.addClass(topo, 'active '): $A.util.addClass(topo, 'inactive');*/

        /*Esto es lo mismo que lo de arriba pero de otra forma
        var number =Math.random();
        if(number < 0.5){
            $A.util.addClass(topo, 'active');
            cmp.set("v.isTopo", true)
        }
        else{
            $A.util.addClass(topo, 'inactive');
            cmp.set("v.isTopo", false)

        } */
                //var number =Math.random() ;
        var randomNumberGenerator = cmp.get("c.random");
        
        //se llama a la funcion random del apex controller
        randomNumberGenerator.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var number = response.getReturnValue();
                if(number < 0.5){
                    $A.util.addClass(topo, 'active');
                    cmp.set("v.isTopo",true)
                }else{
                    $A.util.addClass(topo, 'inactive');
                    cmp.set("v.isTopo",false)
                }
            }
        });

        // randomNumberGenerator.setParams({
        //     "min": 0,
        //     "max": 1
        // });

        $A.enqueueAction(randomNumberGenerator);
    },
    //cuando se hace click en el topo se llama a este metodo que llama al evento que se ha creado en el componente padre
    topoClick: function(cmp, event,helper) {
        //console log es para ver que se ha llamado al metodo
        var isTopo = cmp.get("v.isTopo");
        console.log("isTopo: "+ isTopo);

        var evt = $A.get("e.c:evtPuntuacion");
        console.log("evt: "+ evt);

        evt.setParams({
            "molePoints": isTopo ? 2 : 0
        });
        evt.fire();
    },

})
