import { Component } from "react";
import './botton.css';

export class Button extends Component {
    render() {

        const {text, onClick, disabled } = this.props;

        return(
        <button
            disabled={disabled}
            className='botton' 
            onClick={(event) => {
            event.preventDefault();
            onClick();
        }}
         >{text}</button>
        );
    }
}