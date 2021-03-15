import React, { Component,Fragment } from 'react';
import Signup from './Component/AuthComponent/Signup';
import SpotifyNavbar from './Component/HeaderComponent/SpotifyNavbar';

import SpotifySlider from './Component/SliderComponent/SpotifySlider';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <header>
                   <SpotifyNavbar />
                </header>
                <main>
                    {/*<SpotifySlider/>*/}
                    <Signup/>
                </main>
            </Fragment>
         );
    }
}
 
export default App;
 