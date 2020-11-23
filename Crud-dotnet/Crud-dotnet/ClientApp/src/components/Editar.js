import React, { Component, Fragment } from 'react';
import AcoesUsuario from './AcoesUsuario';

export class Editar extends Component {

    static displayName = Editar.name;

    constructor(props) {
        usuario = React.createClass
        super(props);
        console.log(props);
        this.state = {
            id: props.location.aboutProps !== undefined && props.location.aboutProps.idUsuario !== undefined ? props.location.aboutProps.idUsuario : '',
            usuario: {},
            login: '',
            senha: '',
            loading: true
        };

        this.atualizaLogin = this.atualizaLogin.bind(this);
        this.atualizaSenha = this.atualizaSenha.bind(this);
    }

    componentDidMount() {
        this.populateData();
    }


    static renderUsuario(usuario) {

        return (
            <Fragment>
                <form onSubmit={() => AcoesUsuario.EditarUsuario(usuario)}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">login</span>
                        </div>
                        <input id="login" defaultValue={usuario.login} onChange={this.atualizaLogin} type="text" className="form-control col-sm-4" />
                        <div className="col-sm-1" />
                        <div className="input-group-prepend">
                            <span className="input-group-text">senha</span>
                        </div>
                        <input id="senha" defaultValue={usuario.senha} onChange={() => this.atualizaSenha} type="password" className="form-control col-sm-4" />
                    </div>
                    <br /><br />
                    <input type="submit" className="btn btn-primary" value="Editar" />
                </form>
            </Fragment>
        );
    }

    render() {
        let contents = this.state.loading ? <p><em>Aguarde... Carregando...</em></p> : Editar.renderUsuario(this.state.usuario);

        return (
            <div>
                <h1 id="tabelLabel" >Editar usuário:</h1> <br /><br />
                {contents}
            </div>
        );
    }

    atualizaLogin(event) {
        this.setState({ login: event.target.value });
        //this.state.usuario.login = event.target.value;
    }

    atualizaSenha(event) {
        this.setState({ senha: event.target.value });
        //this.state.usuario.senha = event.target.value;
    }

    async populateData() {
        if (!this.state.id)
            return;
        console.log('ID: ' + this.state.id);
        const response = await fetch('api/Usuario/' + this.state.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        this.setState({
            usuario: data,
            loading: false
        });
    }
}

export default Editar;