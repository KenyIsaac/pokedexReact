import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';


export default class NavBar extends Component {


    
    render() {

        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a 
                        href=""
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        Pokedex</a>

                        <a 
                        href="https://www.youtube.com/watch?v=2-81C9X4QA0" target="_blank"
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        Leyendas Arceus</a>

                        <a 
                        href="https://rewards.nianticlabs.com/pokemongo/redeem/" target="_blank"
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        Canjea en Pokemon Go</a>

                        <a 
                        href="https://www.pokemon.com/el/" target="_blank"
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                        Pokémon Oficial</a>

                        <div className="barraBusqueda">
                                <input
                                type="text"
                                placeholder="Busca tu pokémon"
                                className="textField"
                                Name="busqueda"
                                />

                                <button type="button" className="btnbuscar">
                                {" "}
                                <FontAwesomeIcon icon={faSearch} />
                                </button>
                        </div>

                </nav>




            </div>
        );
    }
}