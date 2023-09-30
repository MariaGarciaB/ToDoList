//lugar donde guardar los valores, las distintas cosas de la lista (varios valores >> array )
//aca recupero localStorage.getItem 

let aJson = JSON.parse(localStorage.getItem('tareas'));
//Verifica que Json sea un arreglo, en caso de ser null da un arreglo vacío
let datos = Array.isArray(aJson) ? aJson : [];

let id = 1;

const input = document.querySelector('#inputAgregar');

const boton = document.querySelector('.agregar');

const lista = document.querySelector('.lista');

// const botonELiminar = document.querySelector('.eliminar');

boton.addEventListener('click', agregarTareas);

function agregarTareas(){
    const agregado = input.value.trim();
    if(agregado === ''){
        console.log("esta vacío")
        return;
    }
    datos.push({llave:id, tarea:agregado});
    console.log(datos);
    input.value = '';
    mostrarLista();
    id++;

    localStorage.setItem('tareas', JSON.stringify(datos));
}

function mostrarLista(){
    lista.innerHTML = '';
    datos.forEach(item => {
        lista.innerHTML += `<p>${item.tarea} 
        <button class="delete" value="${item.llave}">-</button> </p>`;
    })
    const elimina = document.querySelectorAll(`.delete`);
    console.log(elimina);
        elimina.forEach( boton => {
            boton.addEventListener('click', eliminar);
        })
}


const eliminar = (e) => {    
    console.log(e.target.value);
    /*
    datos.forEach(element =>{
        if(parseInt(e.target.value) === element.llave){
            console.log("Borro: " + element.tarea);
            datos.splice(element.llave-1, 1);
        }
    })
*/
    let temp = parseInt(e.target.value);
    const nuevoArreglo = datos.filter(elemento => 
        temp !== elemento.llave
    )
    

    console.log(nuevoArreglo);  
    datos = nuevoArreglo;
    mostrarLista()
    localStorage.setItem('tareas', JSON.stringify(datos));
}

mostrarLista();