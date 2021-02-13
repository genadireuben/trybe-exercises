import { Component } from 'react';

export default class AverageWeight extends Component {
    render() {
        const { value, measurementUnit } = this.props.weight;
        return (<p>Weight:{value} {measurementUnit} </p>)
    }
};

