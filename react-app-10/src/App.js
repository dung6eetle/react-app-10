import React from 'react';
import './App.css';
import Conditional from './Conditional'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      isLoading: true
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading: false})
    },2000)
  }
  render() {
    return (
      <div className="App">
        {this.state.isLoading === true ? <h1>Loading...</h1> : <Conditional/>}
      </div>
    )
  }
}
export default App;
