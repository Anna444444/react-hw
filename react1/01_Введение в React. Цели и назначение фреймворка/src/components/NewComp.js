import React from "react";

class NewComp extends React.Component {
    names = ["Joe", "Mary", "Abay"];
    render() {
        return (
            this.props.name
            // <ul className="list">
            //     {
            //         this.names.map(val => {
            //             return <li>{val}</li>
            //         })
            //     }
            // </ul>
        )
    }
}

export default NewComp;