import React, {Component} from "react";
import '../styles/App.css';
class App extends Component{
    
    constructor(props)
    {
        super(props);
        this.state={time: new Date().toLocaleTimeString()}
    
    }
    componentDidMount()
    {
        this.intervalID=setInterval(()=>this.updateClock(),1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.intervalID);
    }
    updateClock()
    {
        this.setState({time:new Date().toLocaleTimeString()});
    }

    render(){
        return(<div className="Clock"><h3>{this.state.time}</h3></div>);
    }
}
export default App;
