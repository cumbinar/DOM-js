//eliminar elementos del DOM//

const primerEnlace = document.querySelector('a')
console.log(primerEnlace);
primerEnlace.remove(); //elimina el primer enlace//

//eliminar desde el padre//

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]); //se eliminó el segundo desde el padre//
console.log(navegacion.children);