import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      draw: false,
    };
  }

  calculateDraw = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      return 'no'
    } else if (randomNumber < 1) {
      return 'yes'
    }
  }

  handleDrawClick = () => {
    this.setState({
      draw: true,
    })

  }
  handleDrawDrawAgainClick = () => {
    this.setState({
      draw: false,
    })
  }

  renderDrawOutcome = () => {
    let drawOutcome = 'I dont know';
    let backgroundColor = 'lightgreen';
    const draw = this.calculateDraw();
    switch (draw) {
      case 'yes':
        drawOutcome = 'Yes, do it!'
        break;
      case 'no':
        drawOutcome = 'No, don\'t do it'
        backgroundColor = 'red'
        break;
      default:
        console.log('dont know');
    }
    return (
      <div className="backgroundColor" style={{
        background: backgroundColor
      }}>
        <div className="button_container">
          <div className="outcome_text">
            <span>{drawOutcome}</span>
          </div>
          <Button
            type="button"
            className='drawAgain_button'
            color="secondary"
            onClick={() => this.handleDrawDrawAgainClick()}
          >
            Draw again
        </Button>
        </div >
      </div>
    )
  }

  renderButton = () => {
    return (
      <div className="button_container">
        <div className="draw_text">
          <span>
            Yes or No?
          </span>
        </div>
        <Button
          type="button"
          className="draw_button"
          color="success"
          onClick={() => this.handleDrawClick()}
        >
          Draw
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div className="app_container">
        {this.state.draw ? this.renderDrawOutcome() : this.renderButton()}
      </div>
    );
  }
}

export default App;
