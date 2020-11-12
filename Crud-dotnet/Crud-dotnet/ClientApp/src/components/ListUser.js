import React, { Component } from 'react';

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
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>login</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios.map(listaUsuarios =>
                        <tr>
                            <td>{listaUsuarios.id}</td>
                            <td>{listaUsuarios.login}</td>
                        </tr>
                    )}
                </tbody>
            </table>
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