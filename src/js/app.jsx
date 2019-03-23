import React from 'react';

import Time from './time';
import TimeBox from './timebox';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time_list: {},
      total_time: 4600e6
    };

    for(let i in this.props.data) {
      let time = new Time(this.props.data[i]);
      this.state.time_list[i] = time;
    }
  }

  render() {
    let eons = [];
    let eras = [];
    let periods = [];
    let epochs = [];
    let ages = [];
    for(let i in this.state.time_list) {
      let box = <TimeBox data={this.state.time_list[i]} key={i} />;

      switch(this.state.time_list[i].division) {
        case 'eon':
          eons.push(box);
          break;
        case 'era':
          eras.push(box);
          break;
        case 'period':
          periods.push(box);
          break;
        case 'epoch':
          epochs.push(box);
          break;
        case 'age':
          ages.push(box);
          break;
      }
    }

    return (
      <div className="geotime">
        <div className="eons">{eons}</div>
        <div className="eras">{eras}</div>
        <div className="periods">{periods}</div>
        <div className="epochs">{epochs}</div>
        <div className="ages">{ages}</div>
      </div>
    )
  }
}