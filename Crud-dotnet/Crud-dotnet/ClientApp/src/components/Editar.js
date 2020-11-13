import React, { Component } from 'react';
import AcoesUsuario from './AcoesUsuario.js'

export class Editar extends Component{

    static displayName = Editar.name;

    async vai() {
        fetch('api/Usuario/5', { method: 'PUT', body: ['teste', 'vai'], })
    }

    render() {
        return (
            <div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="login">login</span>
                    </div>
                    <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="senha">senha</span>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <br />
                <button type="button" class="btn btn-primary" onClick={this.vai}>Gravar</button>
            </div>
        );
    }
}