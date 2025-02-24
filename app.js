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
    }
    cajaTexto.value = "";
}

