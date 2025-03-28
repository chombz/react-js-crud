import React, { Component } from "react";

//CBC
class Loader extends Component 
{
    render()
    {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        );
    }
}

export default Loader;