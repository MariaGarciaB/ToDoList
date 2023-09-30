let aJson = JSON.parse(localStorage.getItem('tareas'));
// Si no hay datos válidos en el LocalStorage, utiliza un arreglo vacío
let datos = Array.isArray(aJson) ? aJson : []; 

const input = document.querySelector('#inputAgregar');
const boton = document.querySelector('.agregar');
const lista = document.querySelector('.lista');
boton.addEventListener('click', agregarTareas);

function agregarTareas(){
    const agregado = input.value.trim();
    if(agregado === ''){
        console.log("esta vacío")
        return;
    }
    //obteniendo el siguiente valor
    let id = datos.length > 0 ? datos[datos.length - 1].llave + 1 : 1; 
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