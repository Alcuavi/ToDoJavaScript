/* Con esta funcion, esperamos a que la pagina este completamente cargada y procedemos a ejecutar lo que contiene*/
document.addEventListener('DOMContentLoaded', function () {
    const createElement = function (task) {
        let node = document.createElement('div'); /* Creamos un elemento y lo añadimos a un div*/
        let template = function (task) {        /* Template donde vindeamos el nombre de la tarea que le pasamos a la funcion */
            return `<span>${task}</span>`;
        };
        node.innerHTML = template(task);   /* Añadimos el template mediante innerHTML */
        return node.firstChild; /* Apunta a la variable node*/
    };

    /* Funcion en la que vamos añadiendo*/
    const printTask = function (task) {
        let taskItemNode = createElement(task);
        document.querySelector('taskList').appendChild(taskItemNode);
    };

    /* Mediante querySelector, seleccionamos del documento el input del div(class addSection)
    * Añadimos un evento que es el de pulsacion(keyup)
    * Comprobamos que la tecla pulsada sea el intro(keycode === 13)*/
    document.querySelector('.addSection input').addEventListener('keyup', function (evento) {
        let texto = evento.target.value.trim();
        if (evento.keyCode === 13){
            if (texto === ''){     /* Si el texto esta vacio, no guardamos nada*/
                alert("Nada que guardar")
            } else {
                localStorage.setItem("item", texto);    /* Si el texto si que contiene, lo guardamos en el local Storage y lo imprimimos por pantalla */
                printTask(texto);
            }
        }
    });


});
