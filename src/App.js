
import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import Color from "./components/color";
import Form from "./components/form";
import FormColor from "./components/formColor.";

 const colors = [
  { name: "white", hex: '#fff' },
  { name: "Green", hex: '#008000' },
  { name: "Purple", hex: '#800080' },
];
class App extends Component {
  state = {
    colors: colors
  };

  handleInputChange = ({target}) => {
    this.setState({ formInputValue: target.value});
  };

  handleColorChange = ({target}) => {
    this.setState({ formColorValue: target.value});
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const formValues = [{name:this.state.formInputValue, hex: this.state.formColorValue}]
    const updateValues = formValues.concat(this.state.colors)
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
            component={() => <Color colors={this.state.colors}/>}
          />
          <Route path="/formColor/:color" component={FormColor} />
          <Route
            path="/color/form"
            render={ () =>
              <Form
                handleSubmit={this.handleSubmit}
                handleColorChange={this.handleColorChange}
                handleInputChange={this.handleInputChange}
              />
            }
          />
          <Redirect from="/" exact to="/color" />
          <Redirect to="/color" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);