window.addEventListener("load", function(){
    let seperator = document.querySelector(".n-layout-aside\\:resizable:has(aside, .n-aside)");

    if(!seperator)
        return;
                    
    let isMouseDown = false;
    seperator.onmousedown = function(){
        isMouseDown = true;
    }
    
    seperator.onmousemove = function(e){
        if(!isMouseDown)
            return;
        
        

    }
    
})