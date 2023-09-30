//lugar donde guardar los valores, las distintas cosas de la lista (varios valores >> array )
const datos = [];
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
}
