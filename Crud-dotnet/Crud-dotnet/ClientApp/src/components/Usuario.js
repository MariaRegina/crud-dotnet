import { Component } from 'react';

export class Usuario extends Component {

    static displayName = Usuario.name;

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            login: null,
            senha: null,
        };
    }

    componentDidMount() {
        this.populateData();
    }

    async populateData() {
        fetch('api/Usuario/{id}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 1 }),
        })
            .then(response => response.json)
            .then(data => this.setState({ id: data.id, login: data.login, senha: data.senha }))
    }
}
export default Usuario;