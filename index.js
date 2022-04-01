let box = document.querySelector('#box')
let radius = document.querySelectorAll('.def-radius')
let display = document.querySelector('#code-css')
let btnColor = document.querySelector('#color') 
btnColor.value = '#fff700'


function borderRadius(){
    let v1 = 0
    let v2 = 0
    let v3 = 0
    let v4 = 0

    radius.forEach((el,i) =>{
        let value = el.value || 0

        switch(el.id){
            case 'radius1':
                box.style.borderTopLeftRadius = `${value}px`
                v1 = el.value || 0
            break
            case 'radius2':
                box.style.borderTopRightRadius = `${value}px`
                v2 = el.value || 0
            break
            case 'radius3':
                box.style.borderBottomRightRadius = `${value}px`
                v3 = el.value || 0
            break
            case 'radius4':
                box.style.borderBottomLeftRadius = `${value}px`
                v4 = el.value || 0
            break
            }
      
        })
        let displayValue = `${v1}   |   ${v2}   |   ${v3}   |   ${v4}`
        display.value = displayValue      
    
}

function copyCSS(){
    let copy = document.querySelector('#copy')
    
    copy.addEventListener('click', e=>{
        
        let coCss = box.style.borderRadius
        navigator.clipboard.writeText(coCss);

    })
}

function switchColor(){

    btnColor.addEventListener('change', e=>{
        box.style.backgroundColor = btnColor.value

    })
}


switchColor()
copyCSS()
borderRadius()

setInterval(e=>{
    borderRadius()
},1000)