import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";

function App() {
    return (
        <div className="App">
            <Particles params={particlesOptions as RecursivePartial<IOptions>}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                    Edit <code>src/particles.json</code> to customize Particles, then save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://particles.matteobruni.it"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
            </header>
        </div>
    );
}

export default App;