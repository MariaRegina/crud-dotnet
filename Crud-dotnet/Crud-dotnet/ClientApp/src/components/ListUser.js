import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AcoesUsuario from './AcoesUsuario.js';


export class ListUser extends Component {
    static displayName = ListUser.name;

    constructor(props) {
        super(props);
        this.state = { listaUsuarios: [], loading: true };
    }

    componentDidMount() {
        this.populateData();
    }

    static renderListaUsuarios(listaUsuarios) {
        return (
            <Fragment>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>login</th>
                            <th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaUsuarios.map(usuario =>
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.login}</td>
                                <td><Link><button className="btn btn-link" onClick={() => { AcoesUsuario.EditarUsuario(usuario.id) }}>Editar</button></Link></td>
                                <td><button className="btn btn-link" onClick={() => { AcoesUsuario.deletarUsuario(usuario.id) }}>Deletar</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <br/>
                <div>
                    <Link to="/cadastroUsuario"><button className="btn btn-primary">Novo usuário</button></Link>
                </div>
            </Fragment>
        );
    }

    render() {
        let contents = 
            this.state.loading
            ? <p><em>Aguarde... Carregando...</em></p>
                : ListUser.renderListaUsuarios(this.state.listaUsuarios);

        return (
            <div>
                <h1 id="tabelLabel" >Usuários:</h1>
                {contents}
            </div>
        );
    }

    async populateData() {
        const response = await fetch('api/Usuario');
        const data = await response.json();
        this.setState({ listaUsuarios: data, loading: false });
    }
}

export default ListUser;