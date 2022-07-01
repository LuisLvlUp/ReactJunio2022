import React from 'react'
import CartelClase from '../Cartel/CartelClass';
import ContadorClass from '../Contador/ContadorClass';
import './Main.css'

class MainClass extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            contador: 0,
            estado2: false
        }

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar(){
        this.setState({ ...this.state, contador: this.state.contador + 1})
    }

    decrementar(){
        this.setState({ ...this.state, contador: this.state.contador - 1})
    }

    render() {
      return (
        <div className='container'>
            <CartelClase contador={this.state.contador} />
            <ContadorClass contador={this.state.contador} incrementar={this.incrementar}
             decrementar={this.decrementar} />
        </div>
      );
    }
  }

export default MainClass;