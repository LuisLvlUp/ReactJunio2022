import React from 'react'
import './Contador.css'

class ContadorClass extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button className='btn' onClick={() => this.props.decrementar()}>
                    -
                </button>
                <span className='numero'>
                    {this.props.contador}
                </span>
                <button className='btn' onClick={() => this.props.incrementar()}>
                    +
                </button>
            </div>
        );
    }
}

export default ContadorClass;