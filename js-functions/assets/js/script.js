// function pintar(){
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
//     }
//     ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);
//3,1
ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    ele.style.backgroundColor= "yellow";
    ele.style.color= 'black'
    console.log("parte1")
    });
// //3.2

// function pintar(color = 'yellow'){
//     var color = 'green';
//     ele.style.backgroundColor = color
//     console.log('parte blah')
// }    

function pintar(ele, color='green'){
    ele.style.backgroundColor = color
    ele.style.color= 'pink'
}  
pintar(ele);
ele.addEventListener("click", function () {
    pintar(ele,"yellow")
});