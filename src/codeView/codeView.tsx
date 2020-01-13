import React, { Props } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import Store from "Store";
import AceEditor from "react-ace";
import { Redirect } from "react-router-dom";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript"
import "./style.scss"

interface IState{
    goToVisualizer:boolean
}
@observer
export default class CodeView extends React.Component<{},IState,any>{
    currentCode:string
    constructor(props:any){
        super(props);
        this.currentCode = "";
        this.clickEventHandler = this.clickEventHandler.bind(this);
        this.changeEventHandler = this.changeEventHandler.bind(this);
        this.state = {
            goToVisualizer:false
        }
    }
    clickEventHandler() {
        Store.code = this.currentCode;
        this.setState({
            goToVisualizer:true
        })
        
    }
    changeEventHandler(code:string) {
        this.currentCode = code;
    }
    render() {
        const {goToVisualizer} = this.state;
        return (
            <div className="codeArea">
                {goToVisualizer? <Redirect to="/visualization"></Redirect>:null}
                <AceEditor
                    className="ace"
                    mode="javascript"
                    theme="monokai"
                    onChange={this.changeEventHandler}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion= {true}
                    enableSnippets= {true}
                ></AceEditor>
                <Button variant="primary" className="submitCode" onClick={this.clickEventHandler}>Visualize Code</Button>
            </div>
        )
    }
}