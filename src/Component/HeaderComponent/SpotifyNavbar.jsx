import React, { Fragment } from 'react';
import SpotifyLogo from './LogoComponent/SpotifyLogo';
import Spotifymenu from "./menucomponent/Spotifymenu";
import "./spotify-navbar.css";

const SpotifyNavbar = () => {
    return (
        <Fragment>
            <section id="spotifyNavbarBlock">
                <article>
                    <div className="logoBlock">
                        <a href="/">
                            <SpotifyLogo/>
                        </a>
                    </div>
                    <div className="menublock">
                        <a href="/"><Spotifymenu/></a>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default SpotifyNavbar;