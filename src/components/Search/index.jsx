import { Component } from 'react';
import './search.css';

export class Search extends Component  {

    render() {

        const { onChange, type, ...props} = this.props

        return(
            <div className='search'>
                <input onChange={onChange} type={type} {...props} />
            </div>
        )
    }
}