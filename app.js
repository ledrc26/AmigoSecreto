let amigos = [];

function agregarAmigo()
{
    let cajaTexto = document.getElementById('amigo');
    if(cajaTexto.value.trim() === "")
    {
        alert("Ingresa el nombre de un amigo")
    }else 
    {
        amigos.push(cajaTexto.value.trim())
        actualizarLista();
    }
    cajaTexto.value = "";
}

function actualizarLista()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++)
    {
        let amigo = document.createElement('li');
        amigo.textContent = amigos[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo()
{
    let ponerGanador = document.getElementById('resultado');
    ponerGanador.innerHTML = "";
    if (amigos.length === 0)
    {
        alert('Primero ingresa a tus amigos');
    }else
    {
        let indice = Math.floor(Math.random() * amigos.length);
        let ganador = document.createElement('li');
        ganador.textContent = `El amigo secreto sorteado es: ${amigos[indice]}`;
        amigos.pop();
        actualizarLista();
        ponerGanador.appendChild(ganador);

    }
}