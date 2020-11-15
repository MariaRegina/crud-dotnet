import React, { Component, Fragment } from 'react';

export class CadastroUsuario extends Component {

    static displayName = CadastroUsuario.name;

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            login: '',
            senha: '',
        };
        this.atualizaLogin = this.atualizaLogin.bind(this);
        this.atualizaSenha = this.atualizaSenha.bind(this);
        this.RequisicaoEditar = this.RequisicaoEditar.bind(this);
    }

    render() {
        return (
        <Fragment>
            <div>
                <h1 id="tabelLabel" >Criar usuário: </h1>
                <br />
            </div>
                <form onSubmit={this.RequisicaoEditar}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">login</span>
                    </div>
                    <input id="login" onChange={this.atualizaLogin} type="text" className="form-control col-sm-4" />
                    <div className="col-sm-1" />
                    <div className="input-group-prepend">
                        <span className="input-group-text">senha</span>
                    </div>
                    <input id="senha" onChange={this.atualizaSenha} type="password" className="form-control col-sm-4" />
                </div>
                    <br /><br />
                    <input type="submit" className="btn btn-primary" value="Criar" />
            </form>
        </Fragment>
        )
    }

    atualizaLogin(event) {
        this.setState({ login: event.target.value });
    }

    atualizaSenha(event) {
        this.setState({ senha: event.target.value });
    }

    RequisicaoEditar() {

        fetch('api/Usuario/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: this.state.login, senha: this.state.senha }),
        })
    };
}

export default CadastroUsuario;