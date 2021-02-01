import React from "react";
import MainComponent from "./redux-module/main";

export default class Welcome extends React.Component {
    
    render() {
    const name = "milan";
        return (
            <div>
                <MainComponent />
            </div>
        )
    }
}
