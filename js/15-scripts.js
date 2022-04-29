 //Evento Submit a un formulario//

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
  
    e.preventDefault();  //previene la acción por default, se detiene la acción//
    console.log('Buscando');
    console.log(e);
    console.log(e.target.method); //muestra el método que se etá usando//
    console.log(e.target.action); //muestra la acción que se está ejecutando enviar a http..//

});



