export default function(){
    let asidePos = "left";
    let resize = false;

    const layout = document.querySelector(".n-layout-aside\\:resizable");
    const aside = document.querySelector(".n-layout-aside\\:resizable>:is(.n-aside, aside)");
    const main = document.querySelector(".n-layout-aside\\:resizable>:is(.n-main, main)");
    const seperator = document.querySelector(".n-layout-aside\\:resizable:has(aside, .n-aside)");

    if(layout.classList.contains("n-layout-aside-pos:right"))
        asidePos = "right";
    
    if(!seperator)
        return;                   

    
    layout.onmousedown = function(e){
        if(asidePos == "left"){
            let seperatorWidth = parseInt(window.getComputedStyle(aside, '::after').getPropertyValue('width'))        
            let asideWidth = parseInt(window.getComputedStyle(aside).getPropertyValue('width'));
            
            let left = asideWidth-seperatorWidth;
            let right = asideWidth;
            
            if(left <= e.x && e.x < right)
                resize = true;

            console.log(resize,left,e.x,right,asideWidth,seperatorWidth)
        }
        else if(asidePos == "right"){
            let seperatorWidth = parseInt(window.getComputedStyle(aside, '::before').getPropertyValue('width'))
            let mainWidth = parseInt(window.getComputedStyle(main).getPropertyValue('width'));
            
            let left = mainWidth;
            let right = mainWidth+seperatorWidth;
            
            if(left <= e.x && e.x < right)
                resize = true;

            console.log(resize,left,e.x,right,mainWidth,seperatorWidth)
        }


    }

    layout.onmouseup = function(){
        resize = false;
    }
    
    layout.onmousemove = function(e){
        e.preventDefault();
        // if(e.target !== seperator)
        //     return;
        let element = document.elementFromPoint(e.x, e.y);


        
        // console.log("x:",e.x, ",offsetX", e.offsetX)
        // let isOnSeperator = 
        // let movable = isMouseDown && width
        // console.log(width)

        if(!resize)
            return;

        // let w = parseInt(alayout.style.gridTemplateColumns);
        // console.log(w, e.x);
        layout.style.gridTemplateColumns = `${e.x+2}px 1fr`;
        // aside.style.width = e.x;
    }    
}