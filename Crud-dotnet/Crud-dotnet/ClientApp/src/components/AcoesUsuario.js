
const AcoesUsuario = {

    deletarUsuario: (id) => (
        fetch(('api/Usuario/' + id), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id }),
        }),
        window.location.reload(false)
    ),

    RequisicaoEditar : (usuario) => (

        fetch('api/Usuario/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: usuario.login, senha: usuario.senha }),
        })
    ),

    EditarUsuario: (usuario) => (
        fetch('api/Usuario/' + usuario.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: usuario.id, login: usuario.login, senha: usuario.senha })
        })
    ),

    vai: (data) => (
        console.log(data)
    )

}

export default AcoesUsuario;