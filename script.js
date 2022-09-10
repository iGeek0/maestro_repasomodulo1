console.log("entro");


function btncambiarColor(){
    console.log("Entro cambiar color");
    // setTimeout(cambiarColor, 2000)
    setInterval(cambiarColor, 2000);
    console.log("Color cambiado");
}

function cambiarColor(){
    const color = document.getElementsByTagName("body")[0];
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(`Nuevo color puesto: ${randomColor}`);
    color.style.backgroundColor = `#${randomColor}`;
}


/*
function btncambiarColor() {
    cambiarColor().then(function (result) {
        console.log(result);
    });
}

function cambiarColor() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const color = document.getElementsByTagName("body")[0];
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            console.log(randomColor);
            color.style.backgroundColor = `#${randomColor}`;
            reject("termino promesa");
        }, 2000);
    });

}
*/