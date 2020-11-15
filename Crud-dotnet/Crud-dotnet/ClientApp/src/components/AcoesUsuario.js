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
}

export default AcoesUsuario;