import React, { Props } from "react";
import {observer} from "mobx-react";
import Column from "./column/column";
import Store from "./../Store";
import "./style.scss"
@observer
export default class Columns extends React.Component<any, any> {
    maxHeight:number;
    maxWidth:number;
    columns:JSX.Element[] = new Array<JSX.Element>();
    constructor(props:Props<any>) {
        super(props);
        this.maxHeight = window.innerHeight;
        this.maxWidth = window.innerWidth;
        this.populateTheArray();
        this.prepTheColumns();
    }


    populateTheArray() {
        const widthOfLines = this.maxWidth * 0.01;
        const numberOfLines = this.maxWidth/widthOfLines;
        for(let i = 0; i<numberOfLines;i++) {
            let number = Math.random() * (this.maxHeight - 1) + 1;
            Store.array.push(number)
        }
    }

    prepTheColumns() {
        Store.array.forEach((el,index)=>{
            let randomNumber = Math.random() * (this.maxHeight - 1) + 1;
            this.columns.push(<Column key={index} height={randomNumber}></Column>)
        })
    }
    render() {
        return (
            <div className="columns">
                {this.columns}
            </div>
            );
    }
}