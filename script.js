let nombre = document.querySelector('#firstName');
let apellido = document.querySelector('#lastName');
let user = document.querySelector('#username');
let email = document.querySelector('#email');
let boton = document.querySelector('#btn');
let card = document.querySelector('#card');
let boton2 = document.querySelector('#btnBorrar');
let boton3 = document.querySelector('#btnBuscar');
let boton4 = document.querySelector('#btnBorrarCard');
let boton5 = document.querySelector('#btnEditar');
let formulario = document.querySelector('#form');
let input = document.querySelector('#busqueda');
usuarios = [];

class Usuarios{
    constructor(nombre, apellido, user, email, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.user = user;
        this.email = email;
        this.id = id;
    }
}

cargarEventListeners();

function cargarEventListeners(){
    boton.addEventListener('click', validar);
    boton2.addEventListener('click', borrar);
    input.addEventListener('keypress', filtrarBuscar);
    card.addEventListener('click', borrarCard);
   
}

function validar(){
    if(nombre.value === '' || apellido.value === '' || user.value === '' || email.value === ''){
        alert('Todos los campos son obligatorios');
    }else{
        let id = Date.now();
        let usuario = new Usuarios(nombre.value, apellido.value, user.value, email.value, id);
        usuarios.push(usuario);
        mostrarCard();
        console.log(usuarios);
        formulario.reset();
    }
}


/*function validar(){
    const todo = {
        nombre: nombre.value,
        apellido: apellido.value,
        user: user.value,
        email: email.value

    }
    usuarios = [...usuarios, todo];

    
    mostrarCard();
    
}*/

function mostrarCard(){
    let card = document.querySelector('#card');
    card.innerHTML = '';
    usuarios.forEach(usuario => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card mb-4 rounded-3 shadow-sm pt-5 pb-5" id=${usuario.id}>
                <h5 class="card-title">Nombre: ${usuario.nombre}</h5>
                <h5 class="card-title">Apellido:${usuario.apellido}</h5>
                <h5 class="card-title">Usuario: ${usuario.user}</h5>
                <h5 class="card-title">Email: ${usuario.email}</h5>
                <button class="w-20 btn btn-primary btn-sm m-2 btnBorrarCard" id="btnBorrarCard" type="submit">Borrar</button>
                <button class="w-20 btn btn-primary btn-sm m-1 btnEditar" id="btnEditar" type="submit">Editar</button>
            </div>
            
        `;
        card.appendChild(div);
    });

}

function borrar(){
    let card = document.querySelector('#card');
    card.innerHTML = '';
    usuarios = [];

}

    
/*function filtrarBuscar(){
    let buscar = document.querySelector('#busqueda').value;
    let card = document.querySelector('#card');
    card.innerHTML = '';
    usuarios.forEach(usuario => {
        if(usuario.nombre.includes(buscar) || usuario.apellido.includes(buscar) || usuario.user.includes(buscar) || usuario.email.includes(buscar)){
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card mb-4 rounded-3 shadow-sm pt-5 pb-5" >
                    <h5 class="card-title">Nombre: ${usuario.nombre}</h5>
                    <h5 class="card-title">Apellido:${usuario.apellido}</h5>
                    <h5 class="card-title">Usuario: ${usuario.user}</h5>
                    <h5 class="card-title">Email: ${usuario.email}</h5>
                    <button class="w-20 btn btn-primary btn-sm m-2" id="btnBorrarCard" type="submit">Borrar</button>
                    <button class="w-20 btn btn-primary btn-sm m-1" id="btnEditar" type="submit">Editar</button>
                </div>
                
            `;
            card.appendChild(div);
        }
    });
}*/

function borrarCard(e){
    e.preventDefault();
    if (e.target.classList.contains('btnBorrarCard')){
        let id = e.target.parentElement.id;
        usuarios = usuarios.filter(usuario => usuario.id != id);
        mostrarCard();
    }

    if (e.target.classList.contains('btnEditar')){
        
    }
}

function filtrarBuscar(){
    let buscar = document.querySelector('#busqueda').value;
    let card = document.querySelector('#card');
    if (buscar === ''){
        mostrarCard();
    }
    else {
    card.innerHTML = '';
    usuarios.forEach(usuario => {
        if(usuario.nombre.includes(buscar) || usuario.apellido.includes(buscar) || usuario.user.includes(buscar) || usuario.email.includes(buscar)){
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card mb-4 rounded-3 shadow-sm pt-5 pb-5" >
                    <h5 class="card-title">Nombre: ${usuario.nombre}</h5>
                    <h5 class="card-title">Apellido:${usuario.apellido}</h5>
                    <h5 class="card-title">Usuario: ${usuario.user}</h5>
                    <h5 class="card-title">Email: ${usuario.email}</h5>
                    <button class="w-20 btn btn-primary btn-sm m-2" id="btnBorrarCard" type="submit">Borrar</button>
                    <button class="w-20 btn btn-primary btn-sm m-1" id="btnEditar" type="submit">Editar</button>
                </div>
                
            `;
            card.appendChild(div);
        }
    });
}
    
}
   