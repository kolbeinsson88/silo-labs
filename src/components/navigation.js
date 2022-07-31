import React from "react";

class Navigation extends React.Component {
    render () {
        return (
            <div className="nav">
                <div className="nav__row"> 
                    <h1 className="nav__row__heading">
                        <a href="/">SILO LAB</a>
                    </h1>
                </div>
            </div>
        );
    }
}

export default Navigation;

