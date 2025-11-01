import React, {Component} from 'react'

class CountCls extends Component {
    constructor (props) {
        super(props);
        this.state = {
            Counter:0
        }
    }
    Increase = () => {
        this.setState({
            Counter : this.state.Counter+1
        })
    }

    Decrease = () => {
    if (this.state.Counter > 0) { 
      this.setState({
        Counter: this.state.Counter - 1
      });
    }
    };
    
    render() {
        return(
            <div>
                <h1 className='text-center'>{this.state.Counter}</h1>
                <button className='btn btn-success m-2' onClick={this.Increase}>Increment</button>
                <button className='btn btn-primary m-2' onClick={this.Decrease}>Decrement</button>
            </div>
        )
    }
}

export default CountCls