import React, { Component, Fragment } from 'react';

export class Editar extends Component {

    static displayName = Editar.name;

    constructor(props) {
        super(props);
        //this.idUsuario = props;
        console.log(props);
        this.state = {
            usuario: props,
            id: '',
            login: '',
            senha: '',
            loading: true
        };
        this.atualizaLogin = this.atualizaLogin.bind(this);
        this.atualizaSenha = this.atualizaSenha.bind(this);
       //this.populateData();
    }

    static renderUsuario(usuario) {

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
                        <input id="login" value={usuario.login} onChange={this.atualizaLogin} type="text" className="form-control col-sm-4" />
                        <div className="col-sm-1" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">senha</span>
                        </div>
                        <input id="senha" value={usuario.senha} onChange={this.atualizaSenha} type="password" className="form-control col-sm-4" />
                    </div>
                    <br /><br />
                    <input type="submit" className="btn btn-primary" value="Editar" />
                </form>
            </Fragment>
        );
    }

    render() {
        let contents = Editar.renderUsuario(this.usuario);

        return (
            <div>
                <h1 id="tabelLabel" >Usuários:</h1>
                {contents}
            </div>
        );
    }

    atualizaLogin(event) {
        this.setState({ login: event.target.value });
    }

    atualizaSenha(event) {
        this.setState({ senha: event.target.value });
    }

   /* async populateData() {
        if (!this.idUsuario)
            return;
        console.log('ID: ' + this.idUsuario);
        const response = await fetch('api/Usuario/' + this.idUsuario, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        this.setState({ id: data.id, login: data.login, senha: data.senha, loading: false });
        
        //this.render;
        //this.render;
        //const data = response.json();
        //this.setState({ usuario: data, loading: false });
    }

    editarUsuario() {
        fetch('api/Usuario/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: this.state.usuario.id, login: this.state.usuario.login, senha: this.state.usuario.senha }),
        });
    }*/
}

export default Editar;