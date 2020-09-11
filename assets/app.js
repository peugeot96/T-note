// variables

const lista = document.querySelector("#lista-tweets")
const span = document.querySelector(".span")
const RM  = document.querySelector(".borrar-todos")

const li = document.querySelector("#lista-tweets").children



// eventos

document.querySelector("#formulario").addEventListener("submit", Creartarea)

lista.addEventListener("click", borrarTarea)

 RM.addEventListener("click", btnrm)

 document.addEventListener("DOMContentLoaded", localStoragelisto)



// funciones

function Creartarea(e){
    e.preventDefault()
    
    
    // lee el valor de el input
    const tarea = document.querySelector("#tweet").value

    
    if(tarea.length === 0 ){

        span.classList="tracking-in-expand-fwd-bottom"
        span.innerText="Opss debes ingresar algo"
    }if(tarea.length > 1  ){
        // vaciar el texto
        span.innerHTML=""

        

        // crear <li> 
        const li = document.createElement("li")
        li.className="borrar"

        //agregar el value de tarea al <li> 
        li.innerText= tarea

        
        // agregar el <li> al DOM
        lista.appendChild(li)

        
        // crea enlace con la clase borrar-tweet
        const a = document.createElement("a")
        a.className="borrar-tweet"
        a.innerText="X"
        li.appendChild(a)

        agregarTareaLocalStorage(tarea)
    }

    
}

// borrar tarea 
 function borrarTarea(e){

     
     if(e.target.className==="borrar-tweet")
     e.target.parentElement.remove()
     
    
     borrarTareaLocalStorage(e.target.parentElement.innerText)
     
}

// Boton borrar todo 
function btnrm(){

    const arr = Array.from(li)
    

    arr.forEach(function(e){

        e.remove()
        

        })
        
        // elimina todo del local Storage
        localStorage.removeItem("tareas")
        
    }
    
    // agregar tarea al local Storage
    function agregarTareaLocalStorage(tarea){
        
    let tareas ;

    tareas = obtenerTareaLocalStorage()

    // añade nueva tarea
    tareas.push(tarea)

// Convierte de string a arreglo para local Storage
    localStorage.setItem("tareas", JSON.stringify(tareas))


}

// Comprueba que haya tareas en el local storage retorna un arreglo
function obtenerTareaLocalStorage(){

    let tareas;

    if(localStorage.getItem("tareas") === null ){

        tareas= []
    }else{

        tareas = JSON.parse( localStorage.getItem("tareas"))
        
    }
    
    return tareas;
}

// carga datos del local storage al dom
function localStoragelisto(){

    let tareas;

    tareas = obtenerTareaLocalStorage()

    tareas.forEach(function(tarea){

        const li = document.createElement("li")
        li.className="borrar"

        //agregar el value de tarea al <li> 
        li.innerText= tarea

        
        // agregar el <li> al DOM
        lista.appendChild(li)

        
        // crea enlace con la clase borrar-tweet
        const a = document.createElement("a")
        a.className="borrar-tweet"
        a.innerText="X"
        li.appendChild(a)

        

    })

    
}
    
// guarda el borrado de una tarea 
function borrarTareaLocalStorage(tarea){



    let tareas;
    let tareaborrar;

        // elimina la x de la tarea
     tareaborrar = tarea.substring(0,tarea.length-1)
     
     tareas = obtenerTareaLocalStorage()

     tareas.forEach(function (tarea,index){

            if(tareaborrar=== tarea){

                tareas.splice(index, 1)

                
            }
     })

     
        localStorage.setItem("tareas", JSON.stringify(tareas))
        
}

