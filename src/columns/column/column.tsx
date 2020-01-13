import React, { Props } from "react";
import "./style.scss"
interface IColumn {
    height:number;
}

export default class Column extends React.Component<IColumn> {
    render() {
        return (
            <div className="column" style={{height:this.props.height+"px"}}></div>
        )
    }
}