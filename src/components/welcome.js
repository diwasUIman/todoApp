import React from "react";
import Hello from "./redux-module/main";

export default class Welcome extends React.Component {
    
    render() {
    const name = "milan";
        return (
            <div>
                <Hello />
            </div>
        )
    }
}
