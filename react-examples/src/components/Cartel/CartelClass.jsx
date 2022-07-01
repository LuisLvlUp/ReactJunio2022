import React from 'react'
import './Cartel.css'

class CartelClase extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
      return (
        <div className='cartel'> Hacen falta { 100 - this.props.contador } para llegar a 100</div>
      );
    }
  }

export default CartelClase;