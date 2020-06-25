import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import './App.css';
import Color from "./components/color"
import Form from './components/form';
import FormColor from './components/formColor.';


const colors = [
  { name: "white", hex: '#fff' },
  { name: "Black", hex: '#000' },
  { name: "Blue", hex: '#00f' }
];


class App extends Component {
  state = {
    colors: colors
  };

handleChangeforTextField = ({ target }) => {
  this.setState({ formInputValue: target.value });
};

handleChangeforColorField = ({target}) => {
  this.setState({ formColorValue: target.value });
};

handleSubmmit = (e) => {
  e.preventDefault();
  const formValues = [{name:this.state.formInputValue, hex: this.state.formColorValue}]
  const updateValues = formValues.concat(this.state.colors);
  this.setState({
    colors: updateValues
  })
  this.props.history.push('/color')
};

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            path="/color" 
            exact 
            component={() => <Color colors={this.state.colors} />} 
          />

         <Route path="/formColor/:color" component={FormColor} />
          <Route 
            path="/color/form" render={ () => 
              <Form
                handleSubmmit={this.handleSubmmit}
                handleColorChange={this.handleChangeforColorField}
                handleInputChange={this.handleChangeforTextField}
              /> 
            }/>
          <Redirect from="/" exact to="/color" />
          <Redirect to="/color" />
        </Switch>
      </div>
    );
  }
  
}

export default App;