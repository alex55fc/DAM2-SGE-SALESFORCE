({
    doInit: function(cmp, event) {
        var randomNumberGenerator = cmp.get("c.random");
        
        //se llama a la funcion random del apex controller
        randomNumberGenerator.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var number = response.getReturnValue();
                if(number < 0.5){
                    cmp.set("v.isTopo",true)
                }else{
                    cmp.set("v.isTopo",false)
                }
            }
        });
        $A.enqueueAction(randomNumberGenerator);
    },
    topoClicked : function(cmp, event, helper) {
        var isTopo = cmp.get("v.isTopo");
        console.log('isTopo: '+ isTopo);

        var evt = $A.get("e.c:topoEvent2");
        console.log("El evento: "+ evt);

        evt.setParams({
            "topoPoints": isTopo ? 2 : 0
        });
        evt.fire();
    },

})
