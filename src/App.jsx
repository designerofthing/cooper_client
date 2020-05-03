import React, { Component } from "react";
import DisplayCooperResult from './components/DisplayCooperResult';
import DisplayPerformanceData from './components/DisplayPerformanceData';
import InputFields from './components/InputFields';
import LoginForm from './components/LoginForm';
import { authenticate } from "./modules/auth";
import { Button, Container } from 'semantic-ui-react';
import './App.css';
import './modules/BackgroundImage.module.css';

export default class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name] : e.target.value, entrySaved: false })
  };
  handleDropdown = ({name, value}) => {
    this.setState({ [name]: value });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />
        break;
      case !renderLoginForm && !authenticated:
          renderLogin = (
            <>
              <Button
                id="login"
                onClick={() => this.setState({ renderLoginForm: true})}
              >
                Login
              </Button>
              <p id='message'>{message}</p>
            </>
          );
        break;
      case authenticated:
        renderLogin = (
          <p id='message'>Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        performanceDataIndex = (
          <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
        )
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
            </>
          )
        } else {
          performanceDataIndex = (
            <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
          )
        }
    }

    return (
      <>
      <Container style={{ 
        height: '100%', 
        width: '100%', 
        padding: '100px', 
        backgroundImage: 'url(/images/cooperbkground.jpg)', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        textAlign: 'center', 
        color: '#565d47'
        }}>
          <h1>
            Cooper Fitness Test
          </h1>   
      
        <InputFields  onChangeHandler={this.onChangeHandler} handleDropdown={this.handleDropdown}/>
        {renderLogin}
        <DisplayCooperResult 
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
     
  
      </Container>
      </> 
    );
  } 
};
