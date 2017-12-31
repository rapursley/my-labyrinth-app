import React, { Component } from 'react';
import { render } from 'react-dom';

//import '../css/style.css';
import '../css/App.css';


//import keenImage from '../assets/keen.png';


export default class Hello extends Component {
    render() {
        return (
            <div className='App'>
				<header className='App-header'>
                <h1 className='App-title'>Welcome to MyLabyrinth.org</h1>
                    {/*<img src={ keenImage } alt='Commander Keen' /> */}
				</header>
				<p className="App-intro">
          		Coming soon.
        		</p>
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));