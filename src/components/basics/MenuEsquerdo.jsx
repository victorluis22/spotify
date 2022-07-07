import React from "react";
import SpotifyLogo from '../../imagens/Spotify_logo.png'
import Home from '../../imagens/home.png'
import Lupa from '../../imagens/lupa.png'
import Livro from '../../imagens/library.png'
import './MenuEsquerdo.css'

export default function MenuEsquerdo() {
    return (
        <div className="MenuEsquerdo">
            <img src={SpotifyLogo} alt="Logo" />

            <div className="esquerda_sup">
                <div className="imagens">
                    <img src={Home} alt="Home" /><br />
                    <img src={Lupa} alt="Lupa" /><br />
                    <img src={Livro} alt="Livro" />
                </div>
                <div className="textos">
                    <p>Home</p>
                    <p>Search</p>
                    <p>Your Library</p>
                </div>
            </div>

            <div className="esquerda_med">
                <div className="imagens">
                    <img src={Home} alt="Home" /><br />
                    <img src={Lupa} alt="Lupa" /><br />
                    <img src={Livro} alt="Livro" />
                </div>
                <div className="textos">
                    <p>Create Playlist</p>
                    <p>Liked Songs</p>
                    <p>Your Episodes</p>
                </div>
            </div>

            <div className="esquerda_baixo">
                <div className="textos">
                    <p>Fav</p>
                    <p>Daily Mix 1</p>
                    <p>Discover Weekly</p>
                    <p>Malayalam</p>
                    <p>Dance / Electronix Mix</p>
                    <p>EDM / P</p>
                </div>

            </div>
        </div>
    )
}