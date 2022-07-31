import React from "react";

class Home extends React.Component {

    render () {
        return (
            <div className="page">

                <div className="page__main">
                    <div className="page__main__section">
                        <h2 className="title">Keywords</h2>
                        <div>
                            <span style={{ marginRight: "2px" }} className="badge badge_color_g">Value creation</span>
                            <span style={{ marginRight: "2px" }} className="badge badge_color_g">Consumption of culture</span>
                            <span style={{ marginRight: "2px" }} className="badge badge_color_g">WIP</span>
                        </div>
                    </div>
                    <div className="page__main__section">
                        <h2>View</h2>
                        <p>
                            WIP
                        </p>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Home;

