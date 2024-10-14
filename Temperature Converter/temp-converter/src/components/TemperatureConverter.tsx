import React, { Component, ChangeEvent } from 'react';

interface State {
  celsius: string;
  fahrenheit: string;
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      celsius: '',
      fahrenheit: '',
    };
  }

  // Handle Celsius input change
  handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const celsius = e.target.value;
    const fahrenheit = celsius ? (parseFloat(celsius) * 9) / 5 + 32 : '';
    this.setState({ celsius, fahrenheit: fahrenheit.toString() });
  };

  // Handle Fahrenheit input change
  handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = e.target.value;
    const celsius = fahrenheit ? ((parseFloat(fahrenheit) - 32) * 5) / 9 : '';
    this.setState({ fahrenheit, celsius: celsius.toString() });
  };

  render() {
    const { celsius, fahrenheit } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Temperature Converter</h2>
        <div>
          <label>
            Celsius:
            <input
              type="number"
              value={celsius}
              onChange={this.handleCelsiusChange}
              style={{ margin: '0 10px' }}
            />
          </label>
        </div>
        <div>
          <label>
            Fahrenheit:
            <input
              type="number"
              value={fahrenheit}
              onChange={this.handleFahrenheitChange}
              style={{ margin: '10px 10px' }}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
