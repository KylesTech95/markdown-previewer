import React from 'react'
import './App.css'
import {marked} from 'marked';


export default class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:"- one- two\n# h1\n## h2\n[This is a link]()\n\n```<h1>Hello World<\h1>```\n\n```\nHello Universe<\h1>\n```\n\n* one\n*\ntwo\n*\nthree\n\n> ONE line block\n\n> TWO line block\n\n![Picture of an apple](https://m.media-amazon.com/images/I/51conNadQtL._SX300_SY300_QL70_FMwebp_.jpg)\n\n**strong text** __strong text__"
        }

    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
        
    render(){
        return(
            
            <div id='inputContainer'>
                <div className="edit-con">
                    <textarea value={this.state.input} id="editor" onChange={this.handleChange} placeholder="Type in here!"/>
                </div>
                <div className="prev-con">
                    <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.state.input)}}/>
                </div>
            </div>
        )
    }
}