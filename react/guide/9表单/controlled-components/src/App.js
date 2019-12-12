import React from 'react';

/* 华氏度转换摄氏度 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    } else {
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

/* 温度输入 */
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { temperature: '' }

        this.handleChange = this.handleChange.bind(this);
    }

    /* 调用父组件传入的方法 */
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
        // this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

/* 计算水是否烧开 */
class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFarenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = 'f' === scale ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = 'c' === scale ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput 
                    scale="c" 
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>

                <TemperatureInput 
                    scale="f" 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFarenheitChange}/>
                
                <BoilingVerdict 
                    celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}

export default Calculator;
