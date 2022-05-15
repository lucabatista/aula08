
// function change(){





    
//     let input = document.getElementById('input')
//     let h1 = document.getElementsByTagName('h2')[0]
//     h1.innerText = input.value
   
// }

window.onload = function(){
    let h1 = document.getElementsByTagName('h1')

    for(let h of h1){
        console.log(h)
        h.addEventListener('click',wif)
        
    }

    function wif(e){
        let m = e.target
        console.log(m.parentElement)
    }

}

 document.getElementById('d1').onchange = function(){myFunction()}
function myFunction(){
 
    let x = document.getElementById('d1')
    x.value = x.value.toUpperCase()
}