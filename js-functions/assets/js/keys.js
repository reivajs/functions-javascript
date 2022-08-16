
//(funcion keydown)
//     document.addEventListener('keydown', function (event) {
//     if (event.key === 'a') {
//         elemento.style.backgroundColor = "#d3f8e2";
//     } else if (event.key === 's') {
//         elemento.style.backgroundColor = "#ffbbd4";
//     } else if (event.key === 'd') {
//         elemento.style.backgroundColor = "#ccdcfd";
//         }
//     })
// });
let myVar = '';

const onClick = function () {
    myVar = this.id
    console.log(myVar)
}

document.getElementById('uno').onclick = onClick;
document.getElementById('dos').onclick = onClick;
document.getElementById('tres').onclick = onClick;
document.getElementById('cuatro').onclick = onClick;

document.addEventListener('keydown', function (event) {
    if (myVar != '') {
        if (event.key === 'a') {
            document.getElementById(myVar).style.backgroundColor = "#d3f8e2";
        } else if (event.key === 's') {
            document.getElementById(myVar).style.backgroundColor = "#ffbbd4";
        } else if (event.key === 'd') {
            document.getElementById(myVar).style.backgroundColor = "#ccdcfd";
        }
    }

});


