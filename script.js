

 document.getElementById('d1').onchange = function(){myFunction()}
function myFunction(){
 
    let x = document.getElementById('d1')
    x.value = x.value.toUpperCase()
}