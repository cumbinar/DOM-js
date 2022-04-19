//Modificar Textos o Imagenes con JS//

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); //si en css visibility: hiden; no lo va encontrar//
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); //trae todo el contenido html////


document.querySelector('.contenido-hero h1').textContent = 'cambia el texto del h1';


const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'; //cambia la imagen 1//
