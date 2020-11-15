import React, { Component } from 'react';

export class Editar extends Component {

    static displayName = Editar.name;

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            login: props.login,
            senha: null,
        };
    }

    render() {
        return (<div>
            <div>
                <h1 id="tabelLabel" >Criar usuário: </h1>
                <br />
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="login">login</span>
                </div>
                <input type="text" className="form-control col-sm-4" defaultValue={this.state.login} />
                <div className="col-sm-1" />
                <div className="input-group-prepend">
                    <span className="input-group-text" id="senha">senha</span>
                </div>
                <input type="password" className="form-control col-sm-4" />
            </div>
            <br /><br />
            <button type="button" className="btn btn-primary" onClick={this.RequisicaoEditar}>Gravar</button>
        </div>)
    }

    RequisicaoEditar() {

        fetch('api/Usuario/{id}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify({ id: id }),
        })
            .then(response => response.json)
            .then(data => this.setState({ id: data.id, login: data.login, senha: data.senha }))
    };
}

export default Editar;