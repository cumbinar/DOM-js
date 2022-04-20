//Traversing the DOM//
//para recorrer por el DOM//

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes);//los espacios en blanco se consideran elementos//
console.log(navegacion.children);
console.log(navegacion.children[1]);
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');
console.log(card.children); //selecciona el card//
console.log(card.children[1]); // selecciona el hijo//
console.log(card.children[1].children); //selecciona uno  de los hijos//
console.log(card.children[1].children[1]);//más específico//
console.log(card.children[1].children[1].textContent);//aún más específico//

card.children[1].children[1].textContent = 'cambio a texto Cumbi Tara';
console.log(card.children[1].children[1].textContent); //cambia el texto seleccionado//

card.children[0].src = 'img/hacer2.jpg' //cambia la imagen de la posición cero//
console.log(card.children[0]);

