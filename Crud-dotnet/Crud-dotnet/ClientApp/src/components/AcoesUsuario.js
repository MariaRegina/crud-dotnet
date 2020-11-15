import { Redirect } from 'react-router-dom'
import React from 'react';

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

    EditarUsuario: (idUsuario) => (
        //console.log('ID: ' + idUsuario)
        //response =
        fetch('api/Usuario/' + idUsuario, {
            method: 'GET',
        }).then(response => response.json())
            .then(data => console.log(data))
            .then(data => AcoesUsuario.vai(data) )
        //data = response.json(),
        //new Editar(data)
            //this.setState({ id: data.id, login: data.login, senha: data.senha, loading: false });
    ),

    vai: (data) => (
        console.log(data),
        <Redirect to='/cadastroUsuario' />
    )

}

export default AcoesUsuario;