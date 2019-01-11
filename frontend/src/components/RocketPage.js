import React, { Component } from 'react';
import SidebarNav from './SidebarNav.js';
import '../css/RocketPage.css';

class RocketPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SidebarNav />
                <div className="RocketView">
                    <div className="AddRocket"><h1>Add a new Rocket</h1></div>
                    <div><p><button className="btn">+</button></p></div>
                </div>
            </div>
        )
    }
}

export default RocketPage;