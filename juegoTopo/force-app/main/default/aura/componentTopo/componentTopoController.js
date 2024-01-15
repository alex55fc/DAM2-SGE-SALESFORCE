({
       
    doInit: function(cmp) {
        var topo = cmp.find("topoId");
        //math random devuelve un numero entre 0 y 1
        //esta forma de hacer un if else es mas corta, hacerla cuando solo ocupe una linea corta, tambn en java
        Math.random() < 0.5 ? 
            $A.util.addClass(topo, 'active '): $A.util.addClass(topo, 'inactive');

        /*Esto es lo mismo que lo de arriba pero de otra forma
        number =Math.random();
        if(number < 0.5){
            $A.util.addClass(cmp, 'active ')
        }
        else{
            $A.util.addClass(cmp, 'inactive');
        } */
    },
    applyCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.addClass(cmpTarget, 'changeMe');
    },
    
    removeCSS: function(cmp, event) {
        var cmpTarget = cmp.find('changeIt');
        $A.util.removeClass(cmpTarget, 'changeMe');
    }
})
